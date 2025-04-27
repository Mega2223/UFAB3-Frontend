import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import './App.tsx'
import './App.css';

import { userTokenAtom } from './atoms';
import { useAtomValue } from 'jotai';
import IrSummary from './paginas/IrSummary';
import Home from './paginas/Home';
import Login from './paginas/Login/Login.tsx';
import Cadastro from './paginas/Cadastro/Cadastro.tsx';
import Dashboard from './paginas/Dashboard/index.tsx'
import UploadXlsx from './paginas/uploadXlsx';

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userToken = useAtomValue(userTokenAtom);
  const isLoggedIn = !!userToken;
  return isLoggedIn ? children : <Navigate to="/login" />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TODO: Add landing page */}
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Cadastro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ir" element={<IrSummary />} />
                <Route path='/uploadXlsx' element={<UploadXlsx />} />
              </Routes>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
