import React from 'react';
import { StyledBlockContainer } from '../Charts/Charts';
import TabPanel from './TabPanel';
import TransactionHistory from '../BuySell/TransHistory';

const TokenMarket: React.FC = () => {
  return (
    <StyledBlockContainer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Token Market</h2>
        <TransactionHistory />
      </div>
      <TabPanel />
    </StyledBlockContainer>
  );
};

export default TokenMarket;
