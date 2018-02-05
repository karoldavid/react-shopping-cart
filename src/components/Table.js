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

export default ({ header, items, onClick }) => (
  <Table>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn key={0}>#</TableHeaderColumn>
        {header.map((item, index) => {
          return (
            <TableHeaderColumn key={index + 1}>{item.label}</TableHeaderColumn>
          );
        })}
        <TableHeaderColumn key={"delete-column"} />
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {items.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableRowColumn key={0}>{index + 1}</TableRowColumn>
            {Object.keys(item).map((key, i) => {
              return <TableRowColumn key={i + 1}>{item[key]}</TableRowColumn>;
            })}
            <TableHeaderColumn key={Object.keys(item).length + 1}>
              <button onClick={() => onClick(index)}>
                <CloseIcon />
              </button>
            </TableHeaderColumn>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
