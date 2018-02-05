import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

export default ({ data }) => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      <TableRow style={styles.boldText}>
        <TableRowColumn>Net Total</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
      </TableRow>
      <TableRow displayBorder={false} style={styles.boldText}>
        <TableRowColumn>Tax</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
      </TableRow>
      <TableRow displayBorder={false}>
        <TableRowColumn>7%</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
      </TableRow>{" "}
      <TableRow>
        <TableRowColumn>19%</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
      </TableRow>{" "}
      <TableRow style={styles.grandTotalText}>
        <TableRowColumn>Grand Total</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

const styles = {
  boldText: {
    fontWeight: "bold"
  },
  grandTotalText: {
    fontWeight: "bold",
    color: "blue"
  },
  numberColumn: {
    width: 50
  }
};
