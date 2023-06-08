import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../app/slices/selectors';
import { UserDashboard } from '../components/UserDashboard/UserDashboard';
import { LabelDashboard } from '../components/LabelDashboard/LabelDashboard';

const Dashboard: React.FC = () => {
  const user = useSelector(selectUser);
  const { isCompanyAdmin } = user ?? {};

  return (
    <div>
      <h1>Dashboard</h1>
      {isCompanyAdmin
        ? (<LabelDashboard />)
        : (<UserDashboard />)
      }
      <br />
      <br />
      <br />
    </div>
  )
};

export default Dashboard;
