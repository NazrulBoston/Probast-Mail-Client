import { Outlet } from "react-router";
import Navbar from "../pages/Home/Home/shared/Navbar/Navbar";
import Footer from "../pages/Home/Home/shared/Footer/Footer";


const RootLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;