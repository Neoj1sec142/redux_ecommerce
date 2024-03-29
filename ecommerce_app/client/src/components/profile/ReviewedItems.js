import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { getTitles, delay, getStarRating } from '../../utils/utils';
import {destroy_review} from '../../store/actions/review'

const ReviewedItems = ({destroy_review, userProfile, current_user, fecthData}) => {
  const [reviewData, setReviewData] = useState([])
  const [loading, setLoading] = useState(true)
  const handleData = () => {
      const {reviews, review_id_title} = userProfile;
      if(reviews.length >= 1){
        try{
          const data = getTitles(reviews, review_id_title)
          setReviewData(data)
          setLoading(false) 
        }catch(err){
          console.log(err)
          setReviewData([])
          setLoading(false) 
        }
      }else{
        setReviewData([])
        setLoading(false) 
      }
    }
  const removeReview = async e => {
    e.preventDefault()
    const id = e.target.value;
    destroy_review(id)
    await delay(500)
    setLoading(true)
    fecthData()
    await delay(400)
    handleData()
  }
  
  useEffect(() => { if(loading && userProfile && userProfile.reviews) handleData() },[userProfile?.reviews])
  if(!loading){
    const {first_name, last_name, is_active, location, username, date_joined} = current_user;
    console.log(reviewData, "REVIEW DATA")
    return (
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5 mb-1'>
          <div className='row w-75 shadow-sm mt-1 mb-1 p-2'>
            <p className='fs-2'>{username}&nbsp; | &nbsp; {is_active ? '🟢' : '🔴'}</p>
            <p className='fs-4'>{first_name ? first_name : ''} {last_name ? last_name : ''}</p>
            <p className='fs-4'>{location ? location : ''}</p>
            <p className='fs-4'>{date_joined ? date_joined.slice(0,10) : ''}</p>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-5 mb-1'>
          <div className='row w-75 shadow-sm mt-1 mb-1 p-2'>
            
              <p className='fs-4 text-center'><strong>Reviews</strong></p>
              <ul className='list-group p-3'>
                {reviewData && reviewData.length >= 1 ? (
                  reviewData.map((item, index) => (
                <li className='list-group-item mt-1 mb-1' key={index}>
                  <p className='fs-4 text-center'>Product: {item.product_title}</p>
                  <p className='fs-6 text-muted'>{item.comment}</p>
                  <p className='fs-6'>{getStarRating(item.stars)}</p>
                  <button value={item.id} onClick={e=>removeReview(e)} className='btn btn-sm btn-outline-danger'>❌</button>
                </li>))): <li className=''>No Reviews Yet</li>}
              </ul>
          </div>
        </div>
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  userProfile: state.auth.userProfile,
  current_user: state.auth.current_user
})

export default connect(mapStateToProps, {destroy_review})(ReviewedItems);