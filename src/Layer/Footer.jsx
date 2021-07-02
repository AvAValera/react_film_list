import React from "react";

export default function Footer() {
    return (
        <footer className="page-footer  light-green accent-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright
                </div>
            </div>
        </footer>
    );
}
