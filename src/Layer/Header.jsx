import React from "react";

export default function Header() {
    return (
        <nav className="green darken-3">
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo center">
                    Logo
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <a href="#!">JavaScript</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
