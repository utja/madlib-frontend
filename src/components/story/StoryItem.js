import React from 'react'

const StoryItem = props => {
  const { user, title, story } = props.story
  return(
    <div>
      <h1>{title}</h1>
      <h2>{user}</h2>
    </div>
  )
}

export default StoryItem