import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';

const TemplateItem = props => {
  // console.log('template item props are', props)
  const handleClick = (event) => {
    props.selectTemplate(props.template)
  }

  return (
    <Fragment>
      <ListItem>
        <ListItemText 
          primary={props.template.title}>
        </ListItemText>
        <Button onClick={handleClick} variant="outlined" color="primary">
          Select
        </Button>
        </ListItem>
        <Divider />
    </Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return { selectTemplate: template => dispatch({type: 'SELECT_TEMPLATE', payload: template })}
}

export default connect(null, mapDispatchToProps)(TemplateItem)