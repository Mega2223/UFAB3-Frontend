import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import './App.tsx';
import './App.css';

import { userTokenAtom } from './atoms';
import { useAtomValue } from 'jotai';
import IrSummary from './paginas/IrSummary';
import Home from './paginas/Home';
import Login from './paginas/Login/Login.tsx';
import Cadastro from './paginas/Cadastro/Cadastro.tsx';
import UploadXlsx from './paginas/uploadXlsx';
import IrAsset from './paginas/IrAsset/index.tsx';

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userToken = useAtomValue(userTokenAtom);
  const isLoggedIn = !!userToken;
  return isLoggedIn ? children : <Navigate to="/Home" />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* TODO: Add landing page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Cadastro />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/ir" element={<IrSummary />} />
                <Route path="/ir/:ticker" element={<IrAsset />} />
                <Route path="/uploadXlsx" element={<UploadXlsx />} />
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
