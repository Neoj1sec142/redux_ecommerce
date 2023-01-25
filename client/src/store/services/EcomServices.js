import Client from "./api";
import PubClient from "./public";
// Product Services
export const GetProducts = async () => {
    try{
        const res = await PubClient.get('store/')
        console.log(res, "Products RES")
        return res
    }catch(err){console.log(err)}
}

export const GetProductById = async (id) => {
    try{
        const res = await PubClient.get(`store/${id}/`)
        return res
    }catch(err){console.log(err)}
}

// export const CreateProduct = async (prod) => {
//     console.log(prod, "BEfore TRY")
//     try {
//         const data = {
//             title: prod.title,
//             description: prod.description,
//             price: prod.price
//             // img: prod.img
//         }
//         console.log(data, "Before axios")
//         const res = await Client.post(`store/`, data)
//         return res
//     } catch (err) {console.log(err)}
// }
    
// export const RemoveProduct = async (id) => {
//     try{
//         const res = await Client.delete(`store/${id}/`)
//         return res
//     } catch (err) {console.log(err)}
// }
// export const UpdateProduct = async (id, prodDetails) => {
//     try {
//         const res = await Client.put(`store/${id}/`, prodDetails)
//         console.log(res, "UPDATE RES")
//         return res
//       } catch (err) {console.log(err)}
// }

// Purchase Services
// export const GetPurchases = async () => {
//     try{
//         const res = await Client.get('store/purchase/')
//         console.log(res, "Purchase RES")
//         return res
//     }catch(err){console.log(err)}
// }

export const GetPurchaseById = async (id) => {
    try{
        const res = await Client.get(`store/purchase/${id}/`)
        return res
    }catch(err){console.log(err)}
}
export const GetPurchaseItems = async (purchase_pk) => {
    try{
        const res = await Client.get(`store/purchase/${purchase_pk}/items/`)
        console.log(res, "RESSSSS")
        return res
    }catch(err){console.log(err)}
}

export const GetPurchasesByUser = async (id) => {
    try{
        const res = await Client.get(`store/user/purchase/${id}/`)
        // console.log(res)
        return res
    }catch(err){console.log(err)}
}

export const CreatePurchase = async (prod) => {
    console.log(prod, "BEfore TRY")
    try {
        const data = {
            customer: prod.customer,
            products: prod.products,
            total: prod.total
            // img: prod.img
        }
        console.log(data, "Before axios")
        const res = await Client.post(`store/purchase/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemovePurchase = async (id) => {
    try{
        const res = await Client.delete(`store/purchase/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdatePurchase = async (id, purDetails) => {
    try {
        const res = await Client.put(`store/purchase/${id}/`, purDetails)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}

// Review Services
export const GetReviewById = async (id) => {
    try{
        const res = await Client.get(`store/reviews/${id}/`)
        return res
    }catch(err){console.log(err)}
}
export const GetReviewsByProduct = async (id) => {
    try{
        const res = await Client.get(`store/${id}/reviews/`)
        // console.log(res)
        return res
    }catch(err){console.log(err)}
}

export const CreateReview = async (rev) => {
    console.log(rev, "BEfore TRY")
    try {
        const data = {
            stars: rev.stars,
            product: rev.product,
            comment: rev.comment,
            author: rev.author
        }
        console.log(data, "Before axios")
        const res = await Client.post(`store/reviews/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveReview = async (id) => {
    try{
        const res = await Client.delete(`store/reviews/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdateReview = async (id, revDetails) => {
    try {
        const res = await Client.put(`store/reviews/${id}/`, revDetails)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}