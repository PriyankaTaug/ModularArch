import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './modules/dashboard/Dashboard';
import HR from './modules/hr/HR';
import CMS from './modules/cms/CMS';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/cms" element={<CMS />} />
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
