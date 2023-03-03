import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {load_orders} from '../../store/actions/paymentMethod'
import { delay } from '../../utils/utils'

const ViewOrders = ({load_orders, orders}) => {
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        load_orders()
        await delay(750)
        setLoading(false)
    }
    useEffect(() => { if(loading) fetchData() },[])
    console.log(orders)
    if(!loading){
        return (
            <div>ViewOrders</div>
        )
    }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
    orders: state.paymentMethod.orders
})

export default connect(mapStateToProps, {load_orders})(ViewOrders);