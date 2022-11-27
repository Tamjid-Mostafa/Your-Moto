import axios from "axios"

export const getPaymentIntent = async price => {
    const response = await axios.post(
      `http://localhost:5000/create-payment-intent`,
      {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('yourMoto_Token')}`,
        }
      }
    )
  
    const data = await response.json()
    return data
  }