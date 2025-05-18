import { BrowserRouter as Router, Route,Navigate,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './modules/dashboard/Dashboard';
import HR from './modules/hr/HR';
import CMS from './modules/cms/CMS';
import type React from 'react';


const modules = [Dashboard,HR,CMS];

const App: React.FC = () => {
  return (
    <Router>
      <Navbar modules={modules} />
      <Routes>
        {modules.map((module, idx) => (
          <Route
            key={idx}
            path={module.routeProps.path}
            element={<module.routeProps.component />}
          />
        ))}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};
export default App;
