import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { checkAuthenticated } from '../store/actions/auth'
import {load_user} from '../store/actions/profile'

const Layout = ({ children, checkAuthenticated, isAuthenticated }) => {
    
    useEffect(() => {
        checkAuthenticated()
    },[])
    
    return(
        <Fragment>
            <Navbar />
            {children}
        </Fragment>
    )
}


export default connect(null, {checkAuthenticated, load_user})(Layout)