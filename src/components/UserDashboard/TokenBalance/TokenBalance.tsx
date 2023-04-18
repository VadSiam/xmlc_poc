import React from 'react';
import { useSelector } from 'react-redux';
import { TokenCard } from './TokenCard';
import { StyledBlockContainer } from '../Charts/Charts';
import { selectUser } from '../../../app/slices/selectors';

export const TokenBalance: React.FC = () => {
  const { tokenBalances } = useSelector(selectUser) ?? {};

  return (
    <StyledBlockContainer>
      <h2>
        Available Token Balance
      </h2>
      {(tokenBalances ?? []).map((tokenBalance, index: number) => (
        <TokenCard key={index} tokenBalance={tokenBalance} />
      ))}
    </StyledBlockContainer>
  );
};
