import React from 'react';
import BuyXMLC from './BuyXMLC/BuyXMLC';
import { TokenBalance } from '../UserDashboard/TokenBalance/TokenBalance';
import MintCreateTabPanel from './MintTokens/MintCreateTabPanel';

export const LabelDashboard: React.FC = () => {
  return (
    <div>
      <TokenBalance />
      <br />
      <BuyXMLC />
      <br />
      <MintCreateTabPanel />
    </div>
  );
};
