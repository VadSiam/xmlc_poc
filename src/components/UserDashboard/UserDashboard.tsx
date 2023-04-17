import React from 'react';
import { Charts } from './Charts/Charts';
import { TokenBalance } from './TokenBalance/TokenBalance';
import TokenMarket from './TokenMarket/TokenMarket';

export const UserDashboard: React.FC = () => {
  return (
    <div>
      <TokenBalance />
      <br/>
      <TokenMarket />
      <br/>
      <Charts />
    </div>
  );
};
