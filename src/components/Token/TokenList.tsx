// src/components/Dashboard/Token/TokenList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TokenCard from './TokenCard';
import { Token } from '../../types/TokenTypes';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledBlockContainer } from '../UserDashboard/Charts/Charts';

const TokenList: React.FC = () => {
  const { tokens } = useSelector((state: RootState) => state.tokens);

  return (
    <StyledBlockContainer>
      <h2>
        Token List
      </h2>
      <Grid container justifyContent="center" spacing={2}>
        {tokens.map((token: Token) => (
          <Link
            key={token.id}
            to={`/token/${token.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Grid item key={token.id}>
              <TokenCard token={token} />
            </Grid>
          </Link>
        ))}
      </Grid>
    </StyledBlockContainer>
  );
};

export default TokenList;
