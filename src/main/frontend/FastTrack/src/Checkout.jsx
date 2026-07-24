import {useEffect, useState} from "react";
import Navbar from "./Components/Navbar";

function Checkout() {
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