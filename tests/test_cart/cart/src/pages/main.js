import React, {useEffect} from "react"
import { connect } from "react-redux"
import {get_data} from '../store/actions/cart'

const Main = ({get_data, products}) => {
    useEffect(() => {
        get_data()
    },[])
    
    return(
        <div className="container">
            <br/>
            {products.map(p => (
                <div className="card" key={p.id}>
                    <br/>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <h3>{p.price}</h3>
                    <label className="form-label" htmlFor="qty"></label>
                    <input className="form-control" name="qty" type='number'/>
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            ))}
            <br/>
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.cart.products
})

export default connect(mapStateToProps, {get_data})(Main)