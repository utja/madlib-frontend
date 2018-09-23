export const createUser = userData => {
  const { username, password, passwordConfirmation, firstName, lastName } = userData
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
          password_confirmation: passwordConfirmation,
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
    .then(JSONResponse => {
      localStorage.setItem('jwt', JSONResponse.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOGIN', payload: error})))
  }
}

export const loginUser = userData => {
  const { username, password } = userData
  return dispatch => {
    dispatch({type: 'AUTHENTICATING_USER'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
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
    .then(JSONResponse => {
      localStorage.setItem('jwt', JSONResponse.jwt)
      dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOGIN', payload: error})))
  }
}