import Client from "./api";

// Port Services
export const GetProductReviews = async (product_pk) => {
    try{
        const res = await Client.get('store/reviews/')
        return res
    }catch(err){console.log(err)}
}

export const UpdateReview = async (id, port) => {
    try {
        const res = await Client.put(`store/reviews/${id}/`, port)
        return res
      } catch (err) {throw err}
}

export const RemoveReview = async (id) => {
    try{
        const res = await Client.delete(`store/reviews/${id}/`)
        return res
    } catch (err) {throw err}
}

export const CreateReview = async (review) => {
    
    try {
        const data = {
            stars: review.stars,
            comment: review.comment,
            author: review.author,
            product: review.product
        }
        
        const res = await Client.post(`store/reviews/`, data)
        return res
    } catch (err) {console.log(err)}
}