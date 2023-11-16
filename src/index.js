import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import AppProvider from './context/AppProvider';
const App = lazy(()=> import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
    <Suspense fallback={<p>Loading...</p>}>
    <AppProvider>
      <App />
    </AppProvider>
    </Suspense>
    </BrowserRouter>
);

reportWebVitals();
