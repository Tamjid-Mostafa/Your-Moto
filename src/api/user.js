import axios from "axios"

export const getRole = async email => {
    const response = await axios.get(
      `http://localhost:5000/users/${email}`,
      {
        headers: {
          /* authorization: `Bearer ${localStorage.getItem('')}`, */
        },
      }
    )
    const user = await response.data
    return user?.role
  }

 