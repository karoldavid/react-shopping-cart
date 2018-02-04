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
export default ({ header, items }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((item, index) => {
          return (
            <TableHeaderColumn key={index}>{item.label}</TableHeaderColumn>
          );
        })}
      </TableRow>
    </TableHeader>
    <TableBody>
      {items.map(item => {
        return (
          <TableRow>
            {Object.keys(item).map((key, index) => {
              return <TableRowColumn key={index}>{item[key]}</TableRowColumn>;
            })}
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
