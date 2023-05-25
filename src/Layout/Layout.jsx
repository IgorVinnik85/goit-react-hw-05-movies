import Home from "pages/Home";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
           <Home/>
            <Outlet />
        </>
    )
}

export default Layout