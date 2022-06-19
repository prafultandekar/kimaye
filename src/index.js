<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { LocProvider } from "./ContextApi/LocationAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <LocProvider>
            <App />
          </LocProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from "react-router-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from "@chakra-ui/react"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </ChakraProvider>
    
>>>>>>> 0bc88167daece1ef3a5cf5bf90e49f0051dcb66d
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
