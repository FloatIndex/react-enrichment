// react components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

// my components
import Home from "./Home";
import Contacts from "./Contacts";
import MyWork from "./MyWork";
import StandardLayout from "../layout/StandardLayout";
import NotFound from "./NotFound";

// style
import "../assets/sass/style.scss";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<StandardLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                        <Route path="/my-work" element={<MyWork />}/>
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App;