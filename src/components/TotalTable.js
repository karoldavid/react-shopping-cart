import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

const makeTaxRowColumns = ({ taxCols }) => {
  return Object.keys(taxCols).map((key, index) => {
    return (
      <TableRow displayBorder={false} key={index}>
        <TableRowColumn>{`${key} %`}</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>
          {`${taxCols[key].toFixed(2)} €`}
        </TableRowColumn>
      </TableRow>
    );
  });
};

export default ({ data }) => (
  <Table>
    <TableBody displayRowCheckbox={false}>
      <TableRow style={styles.boldText}>
        <TableRowColumn>Net Total</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>
          {`${data.netTotal.toFixed(2)} €`}
        </TableRowColumn>
      </TableRow>
      <TableRow displayBorder={false} style={styles.boldText}>
        <TableRowColumn>Tax</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>
          {`${data.taxTotal.toFixed(2)} €`}
        </TableRowColumn>
      </TableRow>
      {makeTaxRowColumns(data)}
      <TableRow style={styles.grandTotalText}>
        <TableRowColumn>Grand Total</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>
          {`${data.grandTotal.toFixed(2)} €`}
        </TableRowColumn>
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
    width: 80
  }
};
