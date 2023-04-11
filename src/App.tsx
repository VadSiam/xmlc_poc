import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import { RootState } from './app/store';
import Header from './components/Header';
import TokenDetails from './components/Dashboard/Token/TokenDetails';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const RequireAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {

    if (!isAuthenticated) {
      return <Login />;
    }
    return children;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/token/:tokenId"
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
