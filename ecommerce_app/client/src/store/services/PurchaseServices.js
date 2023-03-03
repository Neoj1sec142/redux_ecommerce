import Client from "./api";

export const RemovePurchase = async (id) => {
    try{
        const res = await Client.delete(`store/purchases/${id}/`)
        return res
    } catch (err) {throw err}
}

export const GetPurchases = async () => {
    try{
        const res = Client.get("store/purchases/")
        return res
    }catch(err){ console.log(err, "Err")}
}

export const GetPurchaseByID = async (id) => {
    try{
        const res = Client.get(`store/purchases/${id}/`)
        return res
    }catch(err){ console.log(err, "Err")}
}

export const CreatePurchase = async (pur) => {
    console.log(pur, "BEfore TRY")
    try {
        const data = {
            customer: pur.customer,
            products: pur.products,
            total_amount: pur.total_amount
        }
        console.log(data, "Before axios")
        const res = await Client.post(`store/purchases/`, data)
        return res
    } catch (err) {console.log(err)}
}