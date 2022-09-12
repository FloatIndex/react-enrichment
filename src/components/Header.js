import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Debora Morandi</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contacts">CONTACTS</Link>
                    </li>
                    <li>
                        <Link to="/my-works">MY WORKS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}