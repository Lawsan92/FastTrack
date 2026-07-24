import {useEffect, useState, useContext, createContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Components/Home.jsx'
import Checkout from './Checkout.jsx'
import Login from "./Components/Login.jsx";

export const UserContext = createContext();

function App() {
    const [productList, setProductList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {

    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <UserContext.Provider value={{user, setUser}}>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/checkout" element={<Checkout/>} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;