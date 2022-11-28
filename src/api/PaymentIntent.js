export const getPaymentIntent = async price => {
  console.log(price)
    const response = await fetch(
      `http://localhost:5000/create-payment-intent`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('yourMoto_Token')}`,
        },
        body: JSON.stringify({ price }),
      }
    )
    const data = await response.json()
    return data
  }