import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import CloseIcon from "./common/CloseIcon";

export default () => (
  <Table>
    <TableBody>
      <TableRow>
        <TableRowColumn>Net Total</TableRowColumn>
        <TableRowColumn>999</TableRowColumn>
      </TableRow> 
      <TableRow>
        <TableRowColumn>Tax</TableRowColumn>
        <TableRowColumn>999</TableRowColumn>
      </TableRow> 
      <TableRow>
        <TableRowColumn>7%</TableRowColumn>
        <TableRowColumn>999</TableRowColumn>
      </TableRow>      <TableRow>
        <TableRowColumn>19%</TableRowColumn>
        <TableRowColumn>999</TableRowColumn>
      </TableRow>      <TableRow>
        <TableRowColumn>Grand Total</TableRowColumn>
        <TableRowColumn>999</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
