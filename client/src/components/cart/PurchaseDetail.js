import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { delay } from '../../utils/utils'
import {load_purchase_by_id} from '../../store/actions/ecom'

const PurchaseDetail = ({load_purchase_by_id}) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {},[])

    return (
        <div>PurchaseDetail</div>
    )
}

const mapStateToProps = state => ({
    current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_purchase_by_id})(PurchaseDetail);