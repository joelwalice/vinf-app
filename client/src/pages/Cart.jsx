import React , {useState} from 'react'
import SNavBar from "./Constant/NavBar";

const Cart = () => {

    const [selects, setSelects] = useState('')
    return(
        <div>
            <SNavBar />
            <div className="text-4xl md:text-5xl lg:text-6xl pt-4 pb-10 px-10 mx-6 font-semibold ">
                <h1>My Cart</h1>
            </div>
            <div className='max-w-[1200px] min-h-[400px] text-center px-10 mx-10 bg-gray-400 grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 rounded-xl'>
            <div >
                <select className=" grid rounded-md text-xl" value={selects}  onChange={(e) => setSelects(e.target.value)}>
                    <option className="text-gray-700">-Select-</option>
                    <option>A-Z</option>
                    <option>All</option>
                    <option>Active</option>
                    <option>Inactive</option>

                </select>
            </div>
      </div>
        </div>
    )
}

export default Cart