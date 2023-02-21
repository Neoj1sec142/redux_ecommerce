import PubClient from "./public";
import Client from "./api";

export const GetBrowseList = async () => {
    try{
        const res = PubClient.get("store/browse/")
        return res
    }catch(err){ console.log(err, "Err")}
}