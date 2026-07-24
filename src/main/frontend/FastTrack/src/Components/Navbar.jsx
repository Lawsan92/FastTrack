import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../contexts/UserContext.jsx";

function Navbar() {
    const {user} = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/login">Login</Link>
                <Link className="navbar-brand" to="/checkout">Checkout</Link>
                <div className="navbar-brand">{!user.email ? 'sign in' : `Welcome ${user.email}!`}</div>
            </div>
        </nav>
    );
}

export default Navbar;