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

const makeTableHeaderColumn = (value, key) => {
  return (
    <TableHeaderColumn style={{ color: "white", fontSize: 20 }} key={key}>
      {value}
    </TableHeaderColumn>
  );
};

const makeTableRowColumn = (value, key) => {
  return (
    <TableRowColumn style={{ fontSize: 20 }} key={key}>
      {value}
    </TableRowColumn>
  );
};

export default ({ header, items, onClick }) => (
  <Table>
    <TableHeader
      style={{ backgroundColor: "blue" }}
      displaySelectAll={false}
      adjustForCheckbox={false}
    >
      <TableRow>
        {makeTableHeaderColumn("#", 0)}
        {header.map((item, index) => {
          return makeTableHeaderColumn(item.label, index + 1);
        })}
        {makeTableHeaderColumn("", "delete-column")}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {items.map((item, index) => {
        return (
          <TableRow key={index}>
            {makeTableRowColumn(index + 1, 0)}

            {Object.keys(item).map((key, i) =>
              makeTableRowColumn(item[key], i + 1)
            )}
            <TableRowColumn
              style={{ fontSize: 20 }}
              key={Object.keys(item).length + 1}
            >
              <button onClick={() => onClick(index)}>
                <CloseIcon />
              </button>
            </TableRowColumn>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
