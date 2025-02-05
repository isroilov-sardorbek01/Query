import React from "react";
import { NavLink } from "react-router";

function Header() {
    return (
        <div className="bg-blue-300 p-2">
            <div className="container flex items-center justify-between ">
                <h1 className="text-[35px] font-bold ">8oy 7dars</h1>
                <ul className="headLink">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/"
                    >
                        Query-1
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/query2"
                    >
                        Query-2
                    </NavLink>
                </ul>
                <button className="px-2 py-1 bg-white rounded-lg active:scale-90 transition-all cursor-pointer">
                    SET
                </button>
            </div>
        </div>
    );
}

export default Header;
