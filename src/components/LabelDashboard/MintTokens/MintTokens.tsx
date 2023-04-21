import React from 'react';
import { Box, Typography } from '@mui/material';
import TokenMintForm from './TokenMintForm';

const MintTokens: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" mb={2}>
        Mint Tokens
      </Typography>
      <TokenMintForm />
    </Box>
  );
};

export default MintTokens;
