import React from 'react';
import { Charts } from './Charts/Charts';
import { TokenBalance } from './TokenBalance/TokenBalance';
import TokenMarket from './TokenMarket/TokenMarket';
import NewsFeed from './NewDropsAndActions/NewDropsAndActions';
import { actionsList } from '../../mocks/mockActions';
import { useLocation } from 'react-router-dom';
import OpenSeaMarket from './OpenSeaMarket/OpenSeaMarket';
import MyOpenSeaMarket from './OpenSeaMarket/MyOpenSeaMarket';

export const UserDashboard: React.FC = () => {
  const { pathname } = useLocation();
  const isNFTPage = pathname === '/nft';

  return (
    <div>
      <TokenBalance />
      <br />
      {isNFTPage ? (
        <>
          <MyOpenSeaMarket />
          <br />
          <OpenSeaMarket />
          <br />
        </>
      ) : (
        <>
          <TokenMarket />
          <br />
          <Charts />
          <br />
        </>
      )}
      <NewsFeed dropActions={actionsList} />
    </div>
  );
};
