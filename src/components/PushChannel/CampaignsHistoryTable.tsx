import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { mockCampaignsHistory } from '../../mocks/mockCampaignsHistory';

const CampaignsHistoryTable: React.FC = () => {
  return (
    <Paper>
      <Typography variant="h6" gutterBottom component="div">
        Campaigns History
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Profit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockCampaignsHistory.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.period}</TableCell>
                <TableCell>{transaction.title}</TableCell>
                <TableCell>{transaction.users}</TableCell>
                <TableCell>{transaction.profit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CampaignsHistoryTable;
