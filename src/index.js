import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Auth0Provider
    domain='dev-1qjfy4om.us.auth0.com'
    clientId='lIXE3leAueNs7Swn1tuLDUnEvb8SE8Cy'
    redirectUri={window.location.origin + '/home'}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
