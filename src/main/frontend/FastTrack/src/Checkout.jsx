import {useEffect, useState} from "react";

function Checkout() {
    const [checkout, setCheckout] = useState(null);
    useEffect(() => {
        
    }, [])
    return (
        <div>
            <h1>Checkout</h1>
            {checkout}
        </div>
    );
};

export default Checkout;