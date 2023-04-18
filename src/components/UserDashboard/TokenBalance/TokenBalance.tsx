import React from 'react';
import { useSelector } from 'react-redux';
import { TokenCard } from './TokenCard';
import { Typography } from '@mui/material';
import { StyledBlockContainer } from '../Charts/Charts';
import { selectUser } from '../../../app/slices/selectors';

export const TokenBalance: React.FC = () => {
  const { tokenBalances } = useSelector(selectUser) ?? {};
  console.log('🚀 ~ file: TokenBalance.tsx:10 ~ tokenBalances:', tokenBalances)

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
