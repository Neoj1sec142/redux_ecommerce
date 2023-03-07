import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import {setAlert} from '../../store/actions/alert'
const PostCheckout = ({setAlert}) => {
    const location = useLocation();
    useEffect(() => {
        const values = QueryString.parse(location.search);
    
        if (values.success) {
        setAlert("Order placed! You will receive an email confirmation.", 'success');
        }
    
        if (values.canceled) {
            setAlert(
            "Order canceled -- continue to shop around and checkout when you're ready.", 'error');
        }
    }, []);
    return (
        <div>PostCheckout</div>
    )
}

export default connect(null, {setAlert})(PostCheckout)