export const getPaymentIntent = async price => {
  console.log(price)
    const response = await fetch(
      `https://yourmoto-server-tamjid-mostafa.vercel.app/create-payment-intent`,
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