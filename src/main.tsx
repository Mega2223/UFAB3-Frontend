import { ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import Auth from './App';

import { userTokenAtom } from './atoms';
import { useAtomValue } from 'jotai';
import IrSummary from './paginas/ir';

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const userToken = useAtomValue(userTokenAtom);
  const isLoggedIn = !!userToken || true; // TODO: Handle auth
  return isLoggedIn ? children : <Navigate to="/auth" />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/ir" element={<IrSummary />} />
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
