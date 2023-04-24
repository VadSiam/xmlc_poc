import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { CampaignUser } from '../../../types/UserTypes';

interface UserDataProps {
  userData: CampaignUser;
}

const UserData: React.FC<UserDataProps> = ({ userData }) => {
  return (
    <Box>
      <Typography variant="subtitle1" gutterBottom>
        User Data
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Profile created</TableCell>
              <TableCell>Tokens balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{userData.name}</TableCell>
              <TableCell>{userData.createdAt}</TableCell>
              <TableCell>
                {userData.tokens.map((token, index) => (
                  <span key={index}>
                    ${token.symbol}: {token.amount}
                    {index < userData.tokens.length - 1 && ', '}
                  </span>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserData;

