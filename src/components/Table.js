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

const makeTableRowColumn = (value, key, type) => {
  return (
    <TableRowColumn style={{ fontSize: 20 }} key={key}>
      {`${value} ${type ? type : ""}`}
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

            {Object.keys(item).map((key, i) => {
              if (key === "totalItem") {
                item[key] = item.tax * item.price / 100 + item.price
              }
              return makeTableRowColumn(item[key], i + 1, header[i].unit);
            })}
            <TableRowColumn
              style={{ fontSize: 20 }}
              key={Object.keys(item).length + 1}
            >
              <button
                style={{ backgroundColor: "#ff4081" }}
                onClick={() => onClick(index)}
              >
                <CloseIcon />
              </button>
            </TableRowColumn>
          </TableRow>
        );
      })}
    </TableBody>
  </Table>
);
