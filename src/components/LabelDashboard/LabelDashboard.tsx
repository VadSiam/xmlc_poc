import React from 'react';
import { TokenBalance } from '../UserDashboard/TokenBalance/TokenBalance';
import MintCreateTabPanel from './MintTokens/MintCreateTabPanel';
import UsersByLabel from './UsersByLabel/UsersByLabel';

export const LabelDashboard: React.FC = () => {
  return (
    <div>
      <TokenBalance />
      <br />
      <MintCreateTabPanel />
      <br />
      <UsersByLabel />
    </div>
  );
};
