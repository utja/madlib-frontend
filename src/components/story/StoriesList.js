import React from 'react'
import StoryItem from './StoryItem'

const StoriesList = props => {
  console.log(props)
  const renderStoryItems = props.stories.map(story => <StoryItem key={story.id} story={story} />)

  return(
    <div className="stories-list">
      {renderStoryItems}
    </div>
  )
}

export default StoriesList