import React, { Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {load_cart, remove_item} from '../../store/actions/auth'
import Alert from '../../utils/Alert'
import { delay } from '../../utils/utils';

const Navbar = ({load_cart, remove_item, isAuthenticated, cartItems, cartTotal}) => {
    const [loading, setLoading] = useState(true)
    const fetchCart = async () => {
        load_cart()
        await delay(300)
        setLoading(false)
    }
    useEffect(() => { if(loading) fetchCart() },[])
    const removeItem = async e => {
        const item = e;
        remove_item(item.id)
        await delay(200)
        fetchCart()
    }
    let authBar;
    if(isAuthenticated){
        authBar = (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">ReduxCommerce</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard"><i class="fa-solid fa-user"></i>&nbsp;Profile</a>
                                </li>
                                <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle nobtn" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-cart-shopping"></i>&nbsp;Cart 
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {cartItems && cartItems.length >=1 ? (
                                        cartItems.map((item, index) => (
                                    <li className="dropdown-item" key={index}>
                                        <p className='w-75'>{item.name} {item.price}</p>
                                        <button onClick={()=>removeItem(item)} className='btn btn-outline-danger w-25'>❌</button>
                                    </li>))):(<li className="dropdown-item">No Items in Cart</li>)}
                                    <li><hr className="dropdown-divider"/></li>
                                    <li className="dropdown-item">Total Items: {cartItems !== null ? cartItems.length : 0} &nbsp;|&nbsp; Total Price: {cartTotal !== null ? `$${cartTotal}` : 0}</li>
                                </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/logout" tabIndex="-1"><i class="fa fa-hand-paper-o"></i>&nbsp;Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Alert />
            </Fragment>
        )
    }
    const publicBar = (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ReduxCommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard">Login / Register</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
            <Alert />
        </Fragment>
    )
    if(!loading){
        return ( <>{isAuthenticated ? authBar : publicBar}</> )
    }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    cartItems: state.auth.cartItems,
    cartTotal: state.auth.cartTotal
})

export default connect(mapStateToProps, {load_cart, remove_item})(Navbar)