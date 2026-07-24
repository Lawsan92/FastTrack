import {useEffect, useState, useContext} from "react";
import Navbar from "./Components/Navbar";
import {UserContext} from "./contexts/UserContext.jsx";

function Checkout() {
    const {user} = useContext(UserContext);
    const [checkout, setCheckout] = useState(null);
    useEffect(() => {
        
    }, [])
    return (
        <div>
            <Navbar/>
            <h1>Checkout</h1>
            {checkout}
        </div>
    );
};

export default Checkout;