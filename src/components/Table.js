import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default ({ data }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {data.map((item, index) => {
          return (
            <TableHeaderColumn key={index}>{item.label}</TableHeaderColumn>
          );
        })}
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);
