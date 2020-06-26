import React from 'react';

import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

export const Providers: React.FC = ({ children }) => (
  <>
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  </>
);
