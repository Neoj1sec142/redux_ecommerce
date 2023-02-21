import React, {useEffect} from 'react'
import Navbar from '../components/base/Navbar'
import { load_current } from '../store/actions/auth'
import { connect } from 'react-redux'

const Layout = ({children, load_current}) => {
    
    useEffect(() => {
        load_current(null)
    }, [])
  
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}
export default connect(null, {load_current})(Layout)