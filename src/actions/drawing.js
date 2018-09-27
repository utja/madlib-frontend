export const getDrawings = () => {
  return dispatch => {
    dispatch({type: 'LOADING_DRAWINGS'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/drawings`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(JSONResponse => {
      dispatch({ type: 'SET_DRAWINGS', payload: JSONResponse })
      dispatch({type: 'LOADED_DRAWINGS'})
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOADING_DRAWINGS', payload: error})))
  }
}

export const postDrawing = (dataURL, storyID, userID, title) => {
  return dispatch => {
    dispatch({type: 'LOADING_STORIES'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/drawings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        drawing: {
          data_url: dataURL,
          story_id: storyID,
          user_id: userID,
          title: title}
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
      dispatch({type: 'SET_DRAWING', payload: JSONResponse})
      dispatch({type: 'LOADED_DRAWINGS'})
      dispatch(getDrawings())
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOADING_DRAWINGS', payload: error})))
  }
}