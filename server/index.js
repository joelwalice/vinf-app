const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./userDetails');
const sellerModel = require('./sellerDetails')
const ProductModel = require('./pDetail');
const Product = require("./pDetail");
const CountryModel = require('./cDetails');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Hello World");
})


mongoose.connect('mongodb+srv://joelwalice:Joel19leema!@cluster0.gfsfgka.mongodb.net/?retryWrites=true&w=majority')

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.status(201).send({ status: "Success", data: user });
                } else {
                    return res.status(401).send({ status: "Password not correct" });
                }
            } else {
                return res.status(401).send({ status: "User Not exists" });
            }
        })
});

app.get('/seller/user', (req, res) => {
    sellerModel.findOne({ email: req.body.email })
        .then(data => {
            res.json(data);

        })
        .catch(err => {
            res.json(err);
        })
})

app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(data => {
            res.json(data);

        })
        .catch(err => {
            res.json(err);
        })
});


app.post('/seller/login', async (req, res) => {
    const { email, password } = req.body;
    sellerModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.status(201).send({ status: "Success", data: user });
                } else {
                    return res.status(401).send({ status: "Password not correct" });
                }
            } else {
                return res.status(403).send({ status: "User Not exists" });
            }
        })
});

app.post('/seller/register', (req, res) => {
    sellerModel.create(req.body)
        .then(data => {
            res.json(data);

        })
        .catch(err => {
            res.json(err);
        })
});


app.post('/seller/product/new', async (req, res) => {
    const { semail, name, price, description, color, category, image } = req.body;
    try {
        await ProductModel.create({ email: semail, name, price, description, color, category, image });
        res.status(201).json({ status: "ok" });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ status: "error", error: error.message });
    }
});


app.post('/seller/product', async (req, res) => {
    try {
        const { semail } = req.body; // Accessing the 'semail' property from req.body
        if (semail) {
            console.log(semail);
            const products = await ProductModel.find({ email: semail });

            if (products.length > 0) {
                res.status(200).json({ data: products });
            } else {
                res.status(404).json({ message: "No products found for the email provided." });
            }
        }
        else{
            const products = await ProductModel.find();

            if (products.length > 0) {
                res.status(200).json({ data: products });
            } else {
                console.log("No data");
                res.status(404).json({ message: "No products found for the email provided." });
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }
});



app.get('/seller/product/:id', (req, res) => {
    ProductModel.findById(req.params.id)
        .then(data => {
            res.json(data);

        })
        .catch(err => {
            res.json(err);
        })
})

app.put('/seller/product/edit/:id', async (req, res) => {
    const { name, price, description, color, category } = req.body;
    await ProductModel.findByIdAndUpdate(req.params.id, { name, price, description, color, category })
        .then(data => {
            console.log(data);
            res.json(data);

        })
        .catch(err => {
            res.json(err);
        })
})
app.delete('/seller/product/delete/:id', async (req, res) => {
    await ProductModel.deleteOne({ _id: req.params.id })
        .then(data => {
            res.json(data);

        })

});

app.post('/seller/settings', (req, res) => {
    CountryModel.create(req.body)
        .then(data => {
            res.json(data);
        })
})

app.put('/seller/settings/:id', (req, res) => {
    CountryModel.findByIdAndUpdate(req.params.id, { country: req.body.country }, { country: req.body.country })
        .then(data => {
            res.json(data);
        })
})

app.get('/seller/settings/:id', (req, res) => {
    CountryModel.findById(req.params.id)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
})

app.listen(1337, () => {
    console.log('Server is running on port 1337');
})