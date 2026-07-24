import './Navbar.jsx'
import Navbar from "./Navbar.jsx";
import {useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";

function Login() {
    const {user, setUser} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUser = (e) => {
        e.preventDefault();
        setUser({'email': email, 'password': password});
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