import React from 'react';
import { Container, Typography } from '@mui/material';
import { TokenChart } from './TokenChart';
import { generateTokenMarketData } from '../../../utils/dataGenerator';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';


export const StyledBlockContainer = styled(Container)`
  padding: 2rem;
  background-color: ${({ theme }: { theme?: Theme }) => theme?.palette.background.paper};
`;

const tokenMarketData = generateTokenMarketData(1);

export const Charts: React.FC = () => {
  return (
    <StyledBlockContainer>
      <Typography variant="h4" gutterBottom>
        Token Charts
      </Typography>
      {Object.entries(tokenMarketData).map(([token, data]) => (
        <TokenChart key={token} token={token} data={data} />
      ))}
    </StyledBlockContainer>
  );
};
