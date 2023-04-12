// src/components/Dashboard/Token/TokenDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { RootState } from '../../../app/store';
import { Token } from '../../../types/TokenTypes';
import { Container } from '../../Login/styles';


const TokenDetails: React.FC = () => {
  const { tokenId } = useParams<{ tokenId: string }>();
  const { tokens } = useSelector((state: RootState) => state.tokens);
  const token = tokens.find((token: Token) => token.id === tokenId);

  if (!token) {
    return <div>Token not found</div>;
  }

  return (
    <Container>
      <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 400 }}>
        <br />
        <CardMedia
          sx={{ height: 245, width: 245 }}
          image={token.imageUrl}
          title={`${token.name} logo`}
        />
        <CardContent>
          <Typography variant="h4">{token.name}</Typography>
          <Typography>Symbol: {token.symbol}</Typography>
          <Typography>Token ID: {token.tokenId}</Typography>
          <Typography>Total Supply: {token.totalSupply}</Typography>
          <Typography> Circulating Supply: {token.circulatingSupply}</Typography>
          <Typography>Owner: {token.owner.companyName}</Typography>
          {token.contractAddress && (
            <Typography>Contract Address: {token.contractAddress}</Typography>
          )}
          {token.metadata && (
            <Typography>Metadata: {token.metadata}</Typography>
          )}
        </CardContent>
      </Card >
    </Container>
  );
};

export default TokenDetails;
