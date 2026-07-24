import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/login">Login</Link>
                <Link className="navbar-brand" to="/checkout">Checkout</Link>
            </div>
        </nav>
    );
}

export default Navbar;