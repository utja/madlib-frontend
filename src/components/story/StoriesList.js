import React from 'react'
import StoryItem from './StoryItem'
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TablePaginationActionsWrapped from '../TablePaginationActions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class StoriesList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 0,
      rowsPerPage: 5,
    }
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  
  render(){
    const { rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.stories.length - page * rowsPerPage);
    const mapStoryItems = this.props.stories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(story => <StoryItem key={story.id} story={story} />);
    return(
      <Grid item container direction="column" xs={4}>
        <h1 className="cursive">Stories</h1>
        <Grid item container direction="column-reverse">
          <Table style={{height: '450px'}}>
            <TableBody>
              {mapStoryItems}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={2}
                  count={this.props.stories.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Grid>
      </Grid>
  )}
}

export default StoriesList