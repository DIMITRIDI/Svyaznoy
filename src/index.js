import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <ToastContainer
            theme='dark'
            position="top-right"
            autoClose={3000}
            closeOnClick
            pauseOnHover={false}
         />
         <App />
      </Provider>
   </React.StrictMode>
);
