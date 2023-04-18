import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import DashboardPage from './pages/DashboardPage';
import { RootState } from './app/store';
import Header from './components/Header';
import TokenDetails from './components/Token/TokenDetails';
import TokenListPage from './pages/TokenListPage';
import NFTDashboardPage from './pages/NFTDashboardPage';
import NFTDetails from './components/UserDashboard/OpenSeaMarket/NFTDetails';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const RequireAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {

    if (!isAuthenticated) {
      Navigate({to: '/login'});
    }
    return children;
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/nft"
          element={
            <RequireAuth>
              <NFTDashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/nft/:nftId"
          element={
            <RequireAuth>
              <NFTDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/token"
          element={
            <RequireAuth>
              <TokenListPage />
            </RequireAuth>
          }
        />
        <Route
          path="/token/:tokenId"
          element={
            <RequireAuth>
              <TokenDetails />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
};

export default App;
