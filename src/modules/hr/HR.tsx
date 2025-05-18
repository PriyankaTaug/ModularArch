const HR: React.FC = () => {
  return <div>Welcome to the HR</div>;
};

export default {
  routeProps: {
    path: '/hr',
    component: HR,
    exact: true,
  },
  name: 'HR',
};
