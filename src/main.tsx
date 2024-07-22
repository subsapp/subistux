import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme,ThemePanel } from '@radix-ui/themes';
import router from './routing/router.tsx'
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme appearance='inherit'>
    <RouterProvider router={router} />
    <ThemePanel/>
    </Theme>
  </React.StrictMode>,
)
