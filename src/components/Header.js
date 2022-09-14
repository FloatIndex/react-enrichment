import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/my-works">My Works</Link>
                    </li>
                    <li>
                        <Link className="bold" to="/">DEBORA MORANDI</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contact Me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}