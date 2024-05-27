import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 50
import {Provider} from "react-redux";
// import store from "./redux/store.js";

// 85
import { store, persistor} from "./redux/store.js";
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // 51
  // <Provider store={store}>
  //      <App/>
  // </Provider>


  // 86
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>
);

