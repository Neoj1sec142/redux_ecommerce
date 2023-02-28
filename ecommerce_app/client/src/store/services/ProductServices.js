import PubClient from "./public";
import Client from "./api";
import axios from 'axios'
export const GetBrowseList = async () => {
    try{
        const res = PubClient.get("store/browse/")
        return res
    }catch(err){ console.log(err, "Err")}
}
export const BroswePage = async (route) => {
    try{
        const res = await axios.get(route)
        return res
    }catch(err){ console.log(err, "Err")}
}

export const GetProductDetails = async (id) => {
    try{
        const res = PubClient.get(`store/product/${id}/reviews/`)
        return res
    }catch(err){ console.log(err, "Err")}
}

export const CreateProduct = async (product) => {
    console.log(product, "BEfore TRY")
    try {
        const data = {
            name: product.name,
            description: product.description,
            image: product.image,
            category: product.category,
            price: product.price
        }
        console.log(data, "Before axios")
        const res = await Client.post(`store/products/`, data)
        return res
    } catch (err) {console.log(err)}
}