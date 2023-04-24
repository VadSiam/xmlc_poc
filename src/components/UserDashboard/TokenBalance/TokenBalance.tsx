import React from 'react';
import { useSelector } from 'react-redux';
import { TokenCard } from './TokenCard';
import { StyledBlockContainer } from '../Charts/Charts';
import { selectUser } from '../../../app/slices/selectors';

export const TokenBalance: React.FC = () => {
  const { tokenBalances, isCompanyAdmin } = useSelector(selectUser) ?? {};
  const tokensToShow = isCompanyAdmin ? tokenBalances?.filter(tokenBalance => ['xmlc', 'adds'].includes(tokenBalance.tokenId)) : tokenBalances;

  return (
    <StyledBlockContainer>
      <h2>
        Available Token Balance
      </h2>
      {(tokensToShow ?? []).map((tokenBalance, index: number) => (
        <TokenCard key={index} tokenBalance={tokenBalance} />
      ))}
    </StyledBlockContainer>
  );
};
