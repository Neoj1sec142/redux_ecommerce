import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
const PostCheckout = () => {
    const location = useLocation();
    useEffect(() => {
        const values = QueryString.parse(location.search);
        console.log(values)
        if (values.success) {
        console.log("Order placed! You will receive an email confirmation.");
        }
    
        if (values.canceled) {
            console.log(
            "Order canceled -- continue to shop around and checkout when you're ready."
        );
        }
    }, []);
    return (
        <div>PostCheckout</div>
    )
}

export default PostCheckout