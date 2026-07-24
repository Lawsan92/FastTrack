import './Navbar.jsx'
import Navbar from "./Navbar.jsx";
import {useContext, useState} from "react";
import {UserContext} from "../App.jsx"

function Login() {
    const user = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e) => {
        e.preventDefault();
        setUser({...user, [email]: e.target.value, password: password});
    };

    return (
        <div className="login">
            <Navbar/>
            <h1>Login page</h1>
            <form className="login-form" onSubmit={handleUser}>
                <div className="form-group">
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;