import React from 'react';
import { Charts } from './Charts/Charts';
import { TokenBalance } from './TokenBalance/TokenBalance';
import TokenMarket from './TokenMarket/TokenMarket';
import { useLocation } from 'react-router-dom';
import OpenSeaMarket from './OpenSeaMarket/OpenSeaMarket';
import MyOpenSeaMarket from './OpenSeaMarket/MyOpenSeaMarket';
import { actionsListScroll } from '../../mocks/mockActionsScroll';
import EndlessScrollComponent from './NewDropsAndActions/EndlessScroll';

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
          <br />
        </>
      ) : (
        <>
          <TokenMarket />
          <br />
          <Charts />
          <br />
          <EndlessScrollComponent dropActions={actionsListScroll} />
        </>
      )}
    </div>
  );
};
