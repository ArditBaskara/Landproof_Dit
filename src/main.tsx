import { ActorProvider, AgentProvider } from '@ic-reactor/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { canisterId, idlFactory } from './declarations/backend';
import './index.css';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: "app",
    element: <Dashboard />
  },
  {
    path: "/",
    element: <div>Landing</div>
  },
  {
    path: "login/",
    element: <div>Logining</div>
  }

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AgentProvider withProcessEnv>
      <ActorProvider idlFactory={idlFactory} canisterId={canisterId}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </ActorProvider>
    </AgentProvider>
  </React.StrictMode>,
);
