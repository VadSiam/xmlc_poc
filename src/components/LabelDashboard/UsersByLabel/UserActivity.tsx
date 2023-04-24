import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { CampaignUser } from '../../../types/UserTypes';

interface UserActivityProps {
  userCampaigns: CampaignUser['campaignsParticipated'];
}

const UserActivity: React.FC<UserActivityProps> = ({ userCampaigns }) => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        User Activity
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Token</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userCampaigns.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.name}</TableCell>
                <TableCell>${activity.token}</TableCell>
                <TableCell>{activity.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserActivity;

