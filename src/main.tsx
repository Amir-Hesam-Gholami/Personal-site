import { createRoot } from 'react-dom/client'
import App from './App1'
import React from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ProjectContext } from './ProjectContext.tsx';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Rtl from "./components/RTL.tsx";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }

]);
createRoot(document.getElementById('root')!).render(
  <Root />
);

function Root(){
  return <ThemeProvider theme={theme}>
    <ProjectContext.Provider value={''}>
      <React.StrictMode>
        <Rtl>
          <RouterProvider router={router} />
        </Rtl>
      </React.StrictMode>
    </ProjectContext.Provider>
  </ThemeProvider>
}
