import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/slices/selectors';
import { UserDashboard } from '../components/UserDashboard/UserDashboard';

const Dashboard: React.FC = () => {
  const user = useSelector(selectUser);
  console.log('🚀 ~ file: Dashboard.tsx:7 ~ user:', user)
  const { isCompanyAdmin } = user ?? {};

  return (
    <div>
      <h1>NFT Dashboard</h1>
      {isCompanyAdmin ? null
        : (<UserDashboard />)}
    </div>
  )
};

export default Dashboard;
