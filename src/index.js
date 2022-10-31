import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppWrapper from "./components/wrappers/AppWrapper";
import Manage from "./pages/Manage";
import Reports from "./pages/Reports";
import Schedule from "./pages/Schedule";
import Boards from "./pages/Boards";
import Settings from "./pages/Settings";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<App />} />
          <Route path="manage" element={<Manage />} />
          <Route path="reports" element={<Reports />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="boards" element={<Boards />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);