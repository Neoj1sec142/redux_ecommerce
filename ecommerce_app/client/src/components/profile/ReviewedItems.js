import React, { useState } from 'react'
import {connect} from 'react-redux'
import { getTitles } from '../../utils/utils';

const ReviewedItems = ({userProfile}) => {
  const [reviewData, setReviewData] = useState([])
  if(userProfile){
    const {reviews, review_id_title} = userProfile;
    
    return (
      <div className='container-fluid'>
        
      </div>
    )
  }else{ return( <div>Loading...</div> ) }
}

const mapStateToProps = state => ({
  userProfile: state.auth.userProfile
})

export default connect(mapStateToProps, {})(ReviewedItems)