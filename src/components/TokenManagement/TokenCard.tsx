import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import styled from '@emotion/styled';
import { Token } from '../../types/TokenTypes';

const StyledCard = styled(Card)`
  margin: 10px;
`;

interface TokenCardProps {
  token: Token;
  onSelect: (token: Token) => void;
  onDelete: (tokenId: string) => void;
}

const TokenCard: React.FC<TokenCardProps> = ({ token, onSelect, onDelete }) => {
  const handleSelect = () => {
    onSelect(token);
  };

  const handleDelete = () => {
    onDelete(token.id);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">{token.name}</Typography>
        <Typography variant="subtitle1">{token.symbol}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleSelect}>View</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </CardActions>
    </StyledCard>
  );
};

export default TokenCard;
