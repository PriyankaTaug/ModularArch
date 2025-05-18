import React from 'react';

const Dashboard: React.FC = () => {
  return <div>Welcome to the Dashboard</div>;
};

export default {
  routeProps: {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
  name: 'Dashboard',
};
