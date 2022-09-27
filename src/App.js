import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import config from './aws-exports';

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            Hey {user.username}, welcome to my channel, with auth!
          </p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
      </Authenticator>
    </div>
  //   <Authenticator>
  //   {({ signOut, user }) => (
  //     <div className="App">
  //       <p>
  //         Hey {user.username}, welcome to my channel, with auth!
  //       </p>
  //       <button onClick={signOut}>Sign out</button>
  //     </div>
  //   )}
  // </Authenticator>
  );
}

export default withAuthenticator(App);