import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider 
    domain="dev-1w037qkgkji51rl0.us.auth0.com"
    clientId="8FbpwFQXR8MAOzeSKtlsce4UrAqX5q3z"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>

  </StrictMode>,
)
