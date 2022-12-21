export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
    }
    fetch(`https://yourmoto-server-tamjid-mostafa.vercel.app/user/${user?.email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          //Save token in LocalStorage
          localStorage.setItem('yourMoto_Token', data.token)
        })

}