import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../app/slices/selectors';

const Dashboard: React.FC = () => {
  const user = useSelector(selectUser);
  console.log('🚀 ~ file: Dashboard.tsx:7 ~ user:', user)

  return (
  <div>
    <h1>Dashboard</h1>
  </div>
)};

export default Dashboard;
