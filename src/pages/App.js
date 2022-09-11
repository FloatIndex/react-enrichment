import React from "react";
import { About } from "./About";
import { Contacts } from "./Contacts";
import { MyWorks } from "./MyWorks";

export class App extends React.Component {
    render() {
        return (
            <ul>
                <li><About /></li>
                <li><Contacts /></li>
                <li><MyWorks /></li>
            </ul>
        )
    }
}