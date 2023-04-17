import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { TokenCard } from './TokenCard';
import { Typography } from '@mui/material';
import { StyledBlockContainer } from '../Charts/Charts';

export const TokenBalance: React.FC = () => {
  const { tokenBalances } = useSelector((state: RootState) => state.user.user) ?? {};

  return (
    <StyledBlockContainer>
      <Typography variant="h4" gutterBottom>
        Your Token Balance
      </Typography>
      {(tokenBalances ?? []).map((tokenBalance, index: number) => (
        <TokenCard key={index} tokenBalance={tokenBalance} />
      ))}
    </StyledBlockContainer>
  );
};
