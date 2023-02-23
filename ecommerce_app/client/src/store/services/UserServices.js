// User Services
import Client from './api'

export const GetUsers = async () => {
    try{
        const res = await Client.get('users/')
        return res
    }catch(err){console.log(err)}
}

export const GetUserDetail = async (id) => {
    try{
        const res = await Client.get(`users/${id}/`)
        return res
    }catch(err){console.log(err)}
}
export const GetUserProfile = async (id) => {
    try{
        const res = await Client.get(`store/user/${id}/profile/`)
        return res
    }catch(err){console.log(err)}
}

export const UpdateUser = async (id, userDetails) => {
    try {
        const res = await Client.put(`users/${id}/`, userDetails)
        return res
      } catch (err) {throw err}
}

export const RemoveUser = async (id) => {
    try{
        const res = await Client.delete(`users/${id}/`)
        return res
    } catch (err) {throw err}
}