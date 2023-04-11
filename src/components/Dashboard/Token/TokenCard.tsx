// src/components/Dashboard/Token/TokenCard.tsx
import React from 'react';
import styled from '@emotion/styled';
import { Card, CardContent, Typography } from '@mui/material';
import { Token } from '../../../types/TokenTypes';

const StyledCard = styled(Card)`
  margin: 1rem;
  max-width: 300px;
`;

export const ImageWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled('img')`
  width: 100px;
`;

interface TokenCardProps {
  token: Token;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  return (
    <StyledCard>
      <CardContent>
        <ImageWrapper>
          <StyledImg src={token.imageUrl} alt={`${token.name} logo`} />
        </ImageWrapper>
        <Typography variant="h5">{token.name}</Typography>
        <Typography>Symbol: {token.symbol}</Typography>
        {/* <Typography>Token ID: {token.tokenId}</Typography>
        <Typography>Total Supply: {token.totalSupply}</Typography>
        <Typography>Circulating Supply: {token.circulatingSupply}</Typography>
        <Typography>Owner: {token.owner.companyName}</Typography> */}
      </CardContent>
    </StyledCard>
  );
};

export default TokenCard;
