import React from 'react';
import Formular from './components/Formular';
import Header from './components/Header';
import { 
  ClerkProvider, 
  RedirectToSignIn, 
  SignedIn, 
  SignedOut, 
  SignIn,
  SignUp,
  UserButton, 
  UserProfile,
  useUser 
} from '@clerk/clerk-react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {

  return (
    <div className="app"> 
    <Header />
          <Formular />
          </div>
          
  );
}

export default App;