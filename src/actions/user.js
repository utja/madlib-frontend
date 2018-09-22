export const createUser = userData => {
  const { username, password, firstName, lastName } = userData
  return dispatch => {
    dispatch({type: 'AUTHENTICATING_USER'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          first_name: firstName,
          last_name: lastName
        }
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    
    // .then(response => {
    //   // debugger
    //   if (response.ok) {
    //     return response.json()
    //   } else {
    //     throw response
    //   }
    // })
    // .then(JSONResponse => {
    //   console.log(JSONResponse)
    // })
    // .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOGIN', payload: error})))
  }
}


// .then(JSONResponse => {
    //   const { user: {username}, password } = JSONResponse
    //   fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json'
    //     },
    //     body: JSON.stringify({
    //       user: {
    //         username: username,
    //         password: password
    //       }
    //     })
    //   })
    // })