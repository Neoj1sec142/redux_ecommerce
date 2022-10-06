import Client from './api'

export const GetUsers = async () => {
  try {
      const response = await Client.get(`users`)
      return response.data
  } catch (error) {
      throw error
  }
}

// export const GetUsersWithFollowers = async () => {
//   try {
//       const response = await Client.get(`users/withfollowers`)
//       return response.data
//   } catch (error) {
//       throw error
//   }
// }

export const GetUserDetail = async (id) => {
  try {
      console.log(id, "BEFORE SERVICE")
      const response = await Client.get(`users/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetUserDetailByUsername = async (username) => {
  try {
      const response = await Client.get(`users/byusername/${username}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const UpdateUserInfo = async (id, userDetails) => {
  try {
    const response = await Client.put(`users/update/${id}`, userDetails)
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetProfileDetail = async (id) => {
  try {
      console.log(id, "BEFORE SERVICE")
      const response = await Client.get(`profiles/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}