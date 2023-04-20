import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/slices/selectors';
import TokenManagement from '../components/TokenManagement/TokenManagement';
import { UserDashboard } from '../components/UserDashboard/UserDashboard';
import { LabelDashboard } from '../components/LabelDashboard/LabelDashboard';

const Dashboard: React.FC = () => {
  const user = useSelector(selectUser);
  console.log('🚀 ~ file: Dashboard.tsx:7 ~ user:', user)
  const { isCompanyAdmin } = user ?? {};

  return (
    <div>
      <h1>Dashboard</h1>
      {isCompanyAdmin
        ? (<LabelDashboard />)
        : (<UserDashboard />)
      }
      <br />
      {isCompanyAdmin && (<TokenManagement />)}
    </div>
  )
};

export default Dashboard;
