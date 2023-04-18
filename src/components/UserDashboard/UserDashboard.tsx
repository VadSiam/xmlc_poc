import React from 'react';
import { Charts } from './Charts/Charts';
import { TokenBalance } from './TokenBalance/TokenBalance';
import TokenMarket from './TokenMarket/TokenMarket';
import NewsFeed from './NewsFeed/NewsFeed';
import { newsList } from '../../mocks/mockNews';

export const UserDashboard: React.FC = () => {
  return (
    <div>
      <TokenBalance />
      <br />
      <TokenMarket />
      <br />
      <Charts />
      <br />
      <NewsFeed newsList={newsList} />
    </div>
  );
};
