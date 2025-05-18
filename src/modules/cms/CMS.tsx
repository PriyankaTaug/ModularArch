const CMS: React.FC = () => {
  return <div>Welcome to the CMS</div>;
};

export default {
  routeProps: {
    path: '/cms',
    component: CMS,
    exact: true,
  },
  name: 'CMS',
};
