import React from 'react';
import { Charts } from './Charts/Charts';
import { TokenBalance } from './TokenBalance/TokenBalance';

export const UserDashboard: React.FC = () => {
  return (
    <div>
      <TokenBalance />
      <br/>
      <Charts />
    </div>
  );
};
