import PubClient from "./public";
import Client from "./api";
import { encryptData } from "../../utils/utils";
export const GetPaymentMethodList = async (user_pk) => {
    try{
        const res = Client.get(`users/payment-methods/${user_pk}/`)
        return res
    }catch(err){ console.log(err, "Err")}
}


export const GetPaymentMethodDetails = async (id) => {
    try{
        const res = Client.get(`payment-methods/${id}/`)
        return res
    }catch(err){ console.log(err, "Err")}
}

export const CreatePaymentMethod = async (pm) => {
    console.log(pm, "BEfore TRY")
    try {
        const data = {
            card_owner: pm.card_owner,
            description: pm.description,
            is_active: pm.is_active,
            is_credit_card: pm.is_credit_card,
            cardholder_name: encryptData(pm.cardholder_name),
            card_number: encryptData(pm.card_number),
            expiration_mon: encryptData(pm.expiration_mon),
            expiration_year: encryptData(pm.expiration_year),
            cvv: encryptData(pm.cvv)
        }
        console.log(data, "Before axios")
        const res = await Client.post(`payment-methods/`, data)
        return res
    } catch (err) {console.log(err)}
}

export const RemovePM = async (id) => {
    try{
        const res = await Client.delete(`payment-methods/${id}/`)
        return res
    } catch (err) {throw err}
}