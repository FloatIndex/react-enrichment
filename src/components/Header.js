import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/my-works">Work</Link>
                    </li>
                    <li>
                        <Link className="bold" to="/">DEBORA MORANDI</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}