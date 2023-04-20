import React from 'react';
import BuyXMLC from './BuyXMLC/BuyXMLC';
import { TokenBalance } from '../UserDashboard/TokenBalance/TokenBalance';

export const LabelDashboard: React.FC = () => {
  return (
    <div>
      <TokenBalance />
      <br />
      <BuyXMLC />
    </div>
  );
};
