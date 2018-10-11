import React from 'react'
import TemplateItem from './TemplateItem'
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const TemplatesList = ({ templates }) => {

  const mapTemplates = templates.map(template => <TemplateItem template={template} key={template.id} />)
  
  return(
    <Grid item className="template-list">
      <List>
        {mapTemplates}
      </List>
    </Grid>
  )
}

export default TemplatesList