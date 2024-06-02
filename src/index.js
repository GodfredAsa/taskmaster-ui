import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App';

import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import reportWebVitals from './reportWebVitals';
import LoginScreen from './screens/LoginScreen';

const root = document.getElementById('root');

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route  path="" element={<LoginScreen />} />
        <Route  path="/register" element={<RegisterScreen />} />
        <Route  path="/dashboard" element={<DashboardScreen />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(root).render(router);

reportWebVitals();