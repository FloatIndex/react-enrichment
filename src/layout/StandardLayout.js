import React from "react";
import { Outlet } from "react-router-dom";

// my components
import Footer from "../components/Footer";
import Header from "../components/Header";

const StandardLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default StandardLayout;