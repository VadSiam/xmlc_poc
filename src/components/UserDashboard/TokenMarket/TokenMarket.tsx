import React from 'react';
import BuySell from './BuySell';
import Swap from './Swap';
import { StyledBlockContainer } from '../Charts/Charts';

const TokenMarket: React.FC = () => {
  return (
    <StyledBlockContainer>
      <h2>Token Market</h2>
      <BuySell />
      <Swap />
    </StyledBlockContainer>
  );
};

export default TokenMarket;
