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

export default ({ header, items }) => (
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn key={0}>#</TableHeaderColumn>
        {header.map((item, index) => {
          return (
            <TableHeaderColumn key={index + 1}>{item.label}</TableHeaderColumn>
          );
        })}
        <TableHeaderColumn key={"delete-column"}></TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {items.map((item, index) => {
        return (
          <TableRow>
            <TableRowColumn key={index}>{index + 1}</TableRowColumn>
            {Object.keys(item).map((key, index) => {
              return <TableRowColumn key={index}>{item[key]}</TableRowColumn>;
            })}
            <TableHeaderColumn key={"delete-column"}><CloseIcon /></TableHeaderColumn>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
