// react components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// my components
import { Home } from "./Home";
import { Contacts } from "./Contacts";
import { MyWorks } from "./MyWorks";
import { StandardLayout } from "../layout/StandardLayout";

// style
import "../Assets/sass/style.scss";

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StandardLayout />}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                        <Route path="/my-works" element={<MyWorks />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}