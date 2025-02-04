import React from "react";
import { NavLink } from "react-router";

function Header() {
    return (
        <div className="bg-blue-300">
            <div className="container">
                <h1>8oy 7dars</h1>
                <ul>
                    <NavLink></NavLink>
                </ul>
                <button>SET</button>
            </div>
        </div>
    );
}

export default Header;
