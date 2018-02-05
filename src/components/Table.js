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
          return makeTableHeaderColumn(item.label, index + 1 );
        })}
        <TableHeaderColumn style={{ color: "white" }} key={"delete-column"} />
        {makeTableHeaderColumn("", "delete-column")}
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
