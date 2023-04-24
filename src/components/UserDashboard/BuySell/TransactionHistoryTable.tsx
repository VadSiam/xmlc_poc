// src/components/TransactionHistory.tsx

import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { mockTransactionHistory } from '../../../mocks/mockTransactionHistory';

const TransactionHistoryTable: React.FC = () => {
  return (
    <Paper>
      <Typography variant="h6" gutterBottom component="div">
        Transaction History
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockTransactionHistory.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.action}</TableCell>
                <TableCell style={{ color: transaction.amount >= 0 ? 'green' : 'red' }}>
                  {transaction.amount} $XMLC
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TransactionHistoryTable;
