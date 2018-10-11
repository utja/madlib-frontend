import React from 'react'
import StoryItem from './StoryItem'
import { Grid, Table, TableBody, TableCell, TableFooter, TablePagination, TableRow } from '@material-ui/core';
import TablePaginationActionsWrapped from '../TablePaginationActions'

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
    const { stories } = this.props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, stories.length - page * rowsPerPage);
    const mapStoryItems = stories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(story => <StoryItem key={story.id} story={story} />);
    return(
      <Grid item container direction="column" xs={4}>
        <h1 className="cursive">Stories</h1>
        <Grid item container >
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
                  count={stories.length}
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
    )
  }
}

export default StoriesList