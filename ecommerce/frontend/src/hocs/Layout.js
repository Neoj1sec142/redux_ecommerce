import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { checkAuthenticated } from '../store/actions/auth'
import {load_user} from '../store/actions/profile'
import CartContainer from '../containers/CartContainer'

const Layout = ({ children, checkAuthenticated, isAuthenticated }) => {
    
    useEffect(() => {
        checkAuthenticated()
    },[])
    
    return(
        <Fragment>
            <Navbar />
            {isAuthenticated ? <CartContainer/> : null}
            {children}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {checkAuthenticated, load_user})(Layout)