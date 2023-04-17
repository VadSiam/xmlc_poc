import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { TokenBalanceType } from '../../../types/UserTypes';
import mockTokens from '../../../mocks/mockTokens';

interface TokenCardProps {
  tokenBalance: TokenBalanceType;
}

export const TokenCard: React.FC<TokenCardProps> = ({ tokenBalance }) => {
  const { tokenId, balance } = tokenBalance;
  const tokenUrl = mockTokens.tokens.find((t) => t.symbol === tokenBalance?.tokenId?.toUpperCase())?.imageUrl;
  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {tokenId?.toUpperCase()}
        </Typography>
        <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
          <Avatar src={tokenUrl} alt={`${tokenId} logo`} style={{ marginRight: 20 }} />
          {balance}
        </Typography>
      </CardContent>
    </Card>
  );
};
