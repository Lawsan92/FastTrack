import './Navbar.jsx'
import Navbar from "./Navbar.jsx";

function Login() {
    return (
        <div className="login">
            <Navbar/>
            <h1>Login page</h1>
            <form className="login-form">
                <div className="form-group">
                    <input type="email" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;