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
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_SIGNUP', payload: error})))
  }
}


//login and set user stories and drawings
export const loginUser = userData => {
  const { username, password } = userData
  return dispatch => {
    dispatch({type: 'AUTHENTICATING_USER'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
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
      dispatch({type: 'SET_USER_STORIES', payload: JSONResponse.user.stories})
      dispatch({type: 'SET_USER_DRAWINGS', payload: JSONResponse.user.drawings})
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOGIN', payload: error})))
  }
}

// get current user and set stories and drawings
export const fetchCurrentUser = () => {
  // takes the token in localStorage and finds out who it belongs to
  return (dispatch) => {
    dispatch({type: 'AUTHENTICATING_USER'}) //tells the app we are fetching
    return fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => response.json())
    .then(JSONResponse => {
      dispatch({type: 'SET_CURRENT_USER', payload: JSONResponse.user})
      dispatch({type: 'SET_USER_STORIES', payload: JSONResponse.user.stories})
      dispatch({type: 'SET_USER_DRAWINGS', payload: JSONResponse.user.drawings})
    })
  }
}

export const updateUser = userData => {
  // add option to update password
  const { username, avatar, first_name, last_name, password } = userData
  return (dispatch) => {
    dispatch({type: 'AUTHENTICATING_USER'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${userData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
          avatar: avatar,
          first_name: first_name,
          last_name: last_name
        }
      })
    })
    .then(response => response.json())
    .then(JSONResponse => {
      dispatch({type: 'SET_CURRENT_USER', payload: JSONResponse})
    })
  }
}