import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import { Button, ListItem, ListItemText } from '@material-ui/core'

const TemplateItem = props => {
  
  const handleClick = (event) => {
    props.selectTemplate(props.template)
  }

  return (
    <Fragment>
      <ListItem divider>
        <ListItemText 
          primary={props.template.title}>
        </ListItemText>
        <Button onClick={handleClick} variant="outlined" color="primary">
          Select
        </Button>
        </ListItem>
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return { selectTemplate: template => dispatch({type: 'SELECT_TEMPLATE', payload: template })}
}

export default connect(null, mapDispatchToProps)(TemplateItem)