import React, { useState } from 'react'
import ReactStars from "react-stars";
import { connect } from 'react-redux';
import {upload_review} from '../../store/actions/review'
import { delay } from '../../utils/utils';

const ReviewForm = ({upload_review, author_id, product_id, setShowForm, fetchData}) => {
    const [rate, setRate] = useState(0)
    const [formData, setFormData] = useState({
        stars: 0,
        comment: '',
        author: null,
        product: null
    });
    const {stars, comment, author, product} = formData;
    const onSubmit = async e => {
        e.preventDefault()
        let review = formData;
        review.author = author_id;
        review.product = product_id;
        review.stars = parseInt(rate);
        upload_review(review)
        await delay(750)
        fetchData()
        setShowForm(false)
    }
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const handleRating = e => setRate(e)
    if(author_id && product_id){
        return (
            <div className='container'>
                <form onSubmit={e=>onSubmit(e)}>
                    <div className='form-group'>
                        <input className='form-control' 
                            onChange={e=>onChange(e)}
                            name="comment" value={comment}/>
                    </div>
                    <div className='form-group'>
                    <ReactStars
                        count={5}
                        value={rate}
                        size={24}
                        color1={"#999999"}
                        color2={"#ffd700"}
                        onChange={handleRating}
                    />
                    </div>
                </form>
            </div>
        )
    }else{ return( <div>Loading...</div> ) }
}

export default connect(null, {upload_review})(ReviewForm);