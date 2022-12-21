import axios from "axios"

export const getRole = async email => {
    const response = await axios.get(
      `https://yourmoto-server-tamjid-mostafa.vercel.app/users/${email}`,
      {
        headers: {
          /* authorization: `Bearer ${localStorage.getItem('')}`, */
        },
      }
    )
    const user = await response.data
    return user?.role
  }

 