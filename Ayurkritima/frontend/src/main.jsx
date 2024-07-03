import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './context/Context';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import the Redux store
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ContextProvider>
      <App />
      <ToastContainer />
    </ContextProvider>
  </Provider>
);