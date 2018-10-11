import React from 'react'
import DrawingItem from './DrawingItem'
import TablePaginationActionsWrapped from '../TablePaginationActions'
import { Grid, Table, TableBody, TableCell, TableFooter, TablePagination, TableRow } from '@material-ui/core';

class DrawingsList extends React.Component {
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
    const { drawings } = this.props
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, drawings.length - page * rowsPerPage);
    const mapDrawingItems = drawings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(drawing => <DrawingItem key={drawing.id} drawing={drawing}/>)
    return(
      <Grid item container direction="column" xs={4}>
        <h1 className="cursive">Drawings</h1>
          <Grid item container direction="column-reverse">
            <Table style={{height: '450px'}}>
              <TableBody>
                {mapDrawingItems}
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
                    count={drawings.length}
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

export default DrawingsList