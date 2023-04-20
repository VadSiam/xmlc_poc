import React from 'react';
import { StyledBlockContainer } from '../Charts/Charts';
import TabPanel from './TabPanel';

const TokenMarket: React.FC = () => {
  return (
    <StyledBlockContainer>
      <h2>Token Market</h2>
      <TabPanel />
    </StyledBlockContainer>
  );
};

export default TokenMarket;
