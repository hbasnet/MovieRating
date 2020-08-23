import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './components/auth'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

//first we create context then using TextContext.Provider we are sending value
//then value will be grabbed by those component using useContext 
//export const TokenContext = createContext(null); now we use cookie

function Router(){

  return (
    <React.StrictMode>
      <CookiesProvider>
        <BrowserRouter>
          <Route exact path="/" component={Auth} />
          <Route exact path="/movies" component={App} />
        </BrowserRouter>
      </CookiesProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Router/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
