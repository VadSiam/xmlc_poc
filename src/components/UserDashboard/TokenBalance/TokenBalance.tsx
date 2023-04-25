import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TokenCard } from './TokenCard';
import { StyledBlockContainer } from '../Charts/Charts';
import { selectUser } from '../../../app/slices/selectors';
import { Button } from '@mui/material';

export const TokenBalance: React.FC = () => {
  const { tokenBalances, isCompanyAdmin } = useSelector(selectUser) ?? {};
  const [expanded, setExpanded] = useState(false);
  const tokensToShow = isCompanyAdmin ? tokenBalances?.filter(tokenBalance => ['xmlc', 'adds'].includes(tokenBalance.tokenId)) : tokenBalances;

  return (
    <StyledBlockContainer>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h2>
          Available Token Balance
        </h2>
        <Button variant="contained" color="primary" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'HIDE' : 'SHOW'}
        </Button>
      </div>
      {expanded ? (
        <>
          {(tokensToShow ?? []).map((tokenBalance, index: number) => (
            <TokenCard key={index} tokenBalance={tokenBalance} />
          ))}
        </>
      ) : null}
    </StyledBlockContainer>
  );
};
