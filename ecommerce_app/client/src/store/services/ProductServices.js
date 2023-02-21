import PubClient from "./public";
import Client from "./api";

export const GetBrowseList = async () => {
    try{
        const res = PubClient.get("store/browse/")
        return res
    }catch(err){ console.log(err, "Err")}
}
export const GetProductDetails = async (id) => {
    try{
        const res = PubClient.get(`store/product/${id}/reviews/`)
        return res
    }catch(err){ console.log(err, "Err")}
}