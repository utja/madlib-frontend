export const getTemplates = () => {
  return dispatch => {
    dispatch({type: 'LOADING_STORIES'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/templates`, {
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
      dispatch({ type: 'SET_TEMPLATES', payload: JSONResponse })
      dispatch({type: 'LOADED_STORIES'})
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOGIN', payload: error})))
  }
}

export const getStories = () => {
  return dispatch => {
    dispatch({type: 'LOADING_STORIES'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stories`, {
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
      dispatch({ type: 'SET_STORIES', payload: JSONResponse })
      dispatch({type: 'LOADED_STORIES'})
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOGIN', payload: error})))
  }
}

export const postStory = (storyWords, selectedTemplateId, username, title) => {
  return dispatch => {
    dispatch({type: 'LOADING_STORIES'})
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        story: {
          username: username,
          words: [storyWords],
          template_id: selectedTemplateId,
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
      dispatch({type: 'SET_STORY', payload: JSONResponse})
      dispatch({type: 'LOADED_STORIES'})
      dispatch(getStories())
    })
    .catch(response => response.json().then(error => dispatch({type: 'FAILED_LOADING_STORIES', payload: error})))
  }
}

