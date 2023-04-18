import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import { TokenBalanceType } from '../../../types/UserTypes';
import mockTokens, { XMLC_TO_EUR_RATE } from '../../../mocks/mockTokens';
import { useSelector } from 'react-redux';
import { selectTokens } from '../../../app/slices/selectors';

interface TokenCardProps {
  tokenBalance: TokenBalanceType;
}

export const TokenCard: React.FC<TokenCardProps> = ({ tokenBalance }) => {
  const existingTokens = useSelector(selectTokens);
  const { tokenId, balance } = tokenBalance;
  const tokenEURPrice = (existingTokens?.find((t) => t.symbol === tokenId.toUpperCase())?.price ?? 0) * XMLC_TO_EUR_RATE;
  const tokenUrl = mockTokens.tokens.find((t) => t.symbol === tokenBalance?.tokenId?.toUpperCase())?.imageUrl;
  return (
    <Card sx={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div" style={{ display: 'flex', alignItems: 'center', fontSize: 16 }}>
          <Avatar src={tokenUrl} alt={`${tokenId} logo`} style={{ marginRight: 20 }} />
          <Typography variant="h5" component="div" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 16 }}>
            {balance} ${tokenId.toUpperCase()}
            <Typography variant="h5" component="div" style={{ fontSize: 13, color: 'grey' }}>
              {tokenEURPrice * balance} €
            </Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};
