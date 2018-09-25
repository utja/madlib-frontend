import React from 'react'
import TemplateItem from './TemplateItem'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const TemplatesList = props => {

  const mapTemplates = props.templates.map(template => <TemplateItem template={template} key={template.id} />)
  // const renderStoryItems = props.stories.map(story => <StoryItem key={story.id} story={story} />)
  return(
    <Grid item className="template-list">
      <List>
        {mapTemplates}
      </List>
    </Grid>
  )
}

export default TemplatesList