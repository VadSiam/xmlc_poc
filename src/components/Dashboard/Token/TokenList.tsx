// src/components/Dashboard/Token/TokenList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import TokenCard from './TokenCard';
import { Token } from '../../../types/TokenTypes';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TokenList: React.FC = () => {
  const { tokens } = useSelector((state: RootState) => state.tokens);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Token List
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {tokens.map((token: Token) => (
          <Link
            key={token.id}
            to={`/dashboard/token/${token.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Grid item key={token.id}>
              <TokenCard token={token} />
            </Grid>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default TokenList;
