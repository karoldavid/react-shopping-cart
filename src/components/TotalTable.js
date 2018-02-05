import React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

const getTotal = data => {
  return data.reduce((prev, next) => {
    return prev + parseInt(next.totalItem, 0);
  }, 0);
};

const makeTaxRowColumns = data => {
  const taxCols = data.reduce((prev, next) => {
    const tax = parseInt(next.tax, 0);
    if (prev.indexOf(tax) === -1) {
      return [...prev, tax];
    }
    return prev;
  }, []);
  console.log(taxCols);
  return taxCols.map((tax, index) => {
    return (
      <TableRow displayBorder={false} key={index}>
        <TableRowColumn>{`${tax} %`}</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
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
          {`${getTotal(data)} €`}
        </TableRowColumn>
      </TableRow>
      <TableRow displayBorder={false} style={styles.boldText}>
        <TableRowColumn>Tax</TableRowColumn>
        <TableRowColumn style={styles.numberColumn}>999</TableRowColumn>
      </TableRow>
      {makeTaxRowColumns(data)}
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
