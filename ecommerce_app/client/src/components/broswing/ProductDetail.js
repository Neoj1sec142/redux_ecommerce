import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { delay } from '../../utils/utils'
import {load_product_details} from '../../store/actions/product'
import ReviewForm from './ReviewForm'

const ProductDetail = ({load_product_details, productDetail, current_user}) => {
    const {id} = useParams()
    const [showReviews, setShowReviews] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(true)
    const fetchData = async () => {
        load_product_details(id)
        await delay(750)
        setLoading(false)
    }
    useEffect(() => {if(loading) fetchData()},[])
    console.log(productDetail, "PRoduct")
    if(!loading){
        const {product, reviews} = productDetail;
        return (
            <div className="container">
                <h1 className="my-4">Product Overview</h1>
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src="@Model.Image" alt="" />
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3">{product.name}</h3>
                        <p>{product.description}</p>
                        <p><small>Category: {product.category}</small></p>
                        <h3 className="my-3">Price: ${product.price}</h3>
                        <p>Reviews: {reviews.length} Stars</p>
                        {!showReviews ? (
                            <Fragment>
                                {(showForm && current_user.is_active) ? (
                                <ReviewForm 
                                    author_id={current_user.id} 
                                    product_id={product.id} 
                                    setShowForm={setShowForm} 
                                    fetchData={fetchData}
                                />
                                ):(
                                <div className='d-flex justify-content-evenly p-3'>
                                    <button onClick={()=>setShowForm(true)} className='btn btn-sm btn-success w-25'>Comment</button>
                                    <button onClick={()=>setShowReviews(true)} className='btn btn-sm btn-secondary w-25'>View Comments</button>
                                </div>)}
                            </Fragment>
                        ):(
                        <ul className='list-group'>
                        {(reviews && reviews.length >= 1) ? (
                            reviews.map((item, index) => (
                            <li key={index} className='list-group-item'>
                                <p className='fs-5'>{item.comment}</p>
                                <p className='fs-7'>Rating: {item.stars}</p>
                                <p className='fs-7'>Commented On: {item.date_created}</p>
                            </li>)))
                            : <li className='list-group-item'>No Reviews</li>}
                            <div className='d-flex justify-content-evenly p-3'>
                                <button className='btn btn-sm btn-success w-25'>Comment</button>
                                <button onClick={()=>setShowReviews(false)} className='btn btn-sm btn-danger w-25'>Close Comments</button>
                            </div>
                        </ul>)}
                    </div>
                </div>
                <h3 className="my-4">Related Projects</h3>
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
                        </a>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <a href="#">
                            <img className="img-fluid" src="https://via.placeholder.com/500x300" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
    productDetail: state.product.productDetail,
    current_user: state.auth.current_user
})

export default connect(mapStateToProps, {load_product_details})(ProductDetail)