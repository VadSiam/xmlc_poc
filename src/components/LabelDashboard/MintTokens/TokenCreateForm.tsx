import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Token } from '../../../types/TokenTypes';


interface TokenFormProps {
  onCreateToken: (token: Token) => void;
}

const TokenCreateForm: React.FC<TokenFormProps> = ({ onCreateToken }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token: Token = {
      id: Date.now().toString(),
      name,
      symbol,
      tokenId: '',
      price: 0.1,
      totalSupply: 0,
      circulatingSupply: 0,
      owner: {
        id: '',
        companyName: '',
      },
    };
    onCreateToken(token);
    setName('');
    setSymbol('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="ImageUrl"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Metadata"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Create Token
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default TokenCreateForm;
