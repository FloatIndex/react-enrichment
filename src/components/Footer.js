import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-footer">
                <div className="column">
                    <span>FOLLOW ME</span>
                    <div className="social-wrapper">
                        <a href="#">
                            <FontAwesomeIcon icon={brands("instagram")} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={brands("facebook")} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={brands("youtube")} />
                        </a>
                    </div>
                </div>

                <div className="vertical-separator"></div>

                <div className="column">
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">RSS Feed</a>
                </div>

                <div className="vertical-separator"></div>

                <div className="column">
                    <a href="#">deboramorandi@gmail.com</a>
                    <a href="#">+62 37 441 7592</a>
                    <a href="#">Bali, Indonesia</a>
                </div>
            </div>


            <div className="bottom-footer">
                <span>Back to top</span>
                <div 
                    className="scroll-to-top" 
                    onClick={
                        () => {window.scrollTo({top: 0, left: 0, behavior: "smooth"})}
                    }
                >
                    <FontAwesomeIcon icon={solid("arrow-up")} />
                </div>
            </div>
        </footer>
    )
}

export default Footer;