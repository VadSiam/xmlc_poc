import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { Token } from '../../../types/TokenTypes';

const DetailsGrid = styled(Grid)`
  margin: 10px;
`;

interface TokenDetailsProps {
  token: Token;
  onEditToken: (token: Token) => void;
  onDeleteToken: (tokenId: string) => void;
}

const TokenDetails: React.FC<TokenDetailsProps> = ({ token, onEditToken, onDeleteToken }) => {
  const handleEdit = () => {
    onEditToken(token);
  };

  const handleDelete = () => {
    onDeleteToken(token.id);
  };

  return (
    <DetailsGrid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{token.name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Symbol: {token.symbol}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Total Supply: {token.totalSupply}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Circulating Supply: {token.circulatingSupply}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Owner: {token.owner.companyName} (ID: {token.owner.id})
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit Token
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete Token
        </Button>
      </Grid>
    </DetailsGrid>
  );
};

export default TokenDetails;
