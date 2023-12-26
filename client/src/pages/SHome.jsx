import React, {useEffect} from "react";
import Navbar from "./Content/SNavBar";

const Home = () => {
  useEffect(() => {
    if (localStorage.getItem("isLoggedInSeller") == null) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-screen min-h-[450px] mt-10 px-10  p-4 rounded-2xl mx-10 pt-10 bg-slate-200">
        <div>
          <div className="text-5xl font-semibold md:text-6xl lg:text-7xl flex justify-center  items-center ">
            <h1 className="items-center pt-4">
              Here you can see your{" "}
              <span className="text-red-600 font-semibold">Stats</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
