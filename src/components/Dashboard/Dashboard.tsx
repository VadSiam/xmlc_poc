import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/slices/selectors';
import TokenList from './Token/TokenList';
import TokenManagement from './TokenManagement/TokenManagement';

const Dashboard: React.FC = () => {
  const user = useSelector(selectUser);
  console.log('🚀 ~ file: Dashboard.tsx:7 ~ user:', user)
  const { isCompanyAdmin } = user ?? {};

  return (
    <div>
      <h1>Dashboard</h1>
      <TokenList />
      {isCompanyAdmin && (<TokenManagement />)}
    </div>
  )
};

export default Dashboard;