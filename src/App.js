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
  useUser,
} from '@clerk/clerk-react';
import { 
  BrowserRouter as Router, 
  Link, 
  Route, 
  Switch, 
  useHistory 
} from 'react-router-dom';

// Retrieve Clerk settings from the environment
const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  return (
    <Router>
      <ClerkProviderWithNavigate>
        <div className="app">
          <Header />
        <Formular />
        {/* <Switch>
          <Route path="/public">
            <div>
              Reached the public route. <Link to="/">Return home.</Link>
            </div>
          </Route>
          <Route path="/sign-in/(.*)?">
            <SignIn routing="path" path="/sign-in" />
          </Route>
          <Route path="/sign-up/(.*)?">
            <SignUp routing="path" path="/sign-up" />
          </Route>

          <PrivateRoute path="/private">
            <div>
              Reached the private route. <Link to="/">Return home.</Link>
            </div>
          </PrivateRoute>
          <PrivateRoute path="/user/(.*)?">
            <UserProfile routing="path" path="/user" />
          </PrivateRoute>

          <Route>
            <SignedIn>
              <UserButton />
              <Greeting />
              <div>You are signed in. You can access both routes.</div>
              <Navigation />
            </SignedIn>
            <SignedOut>
              <div>You are signed out. You can access the public route.</div>
              <Navigation />
            </SignedOut>
          </Route>
        </Switch> */}
        </div>
      </ClerkProviderWithNavigate>
    </Router>
  );
}

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/public">Public route</Link>
      </li>
      <li>
        <Link to="/private">Private route</Link>
      </li>
    </ul>
  );
}

function Greeting() {
  const { firstName } = useUser();
  return <div>Hello, {firstName}!</div>;
}

function PrivateRoute(props) {
  // If the route matches but the user is not signed in, redirect to /sign-in
  return (
    <>
      <SignedIn>
        <Route {...props} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

function ClerkProviderWithNavigate({ children }) {
  const { push } = useHistory();
  return (
    <ClerkProvider
      frontendApi={clerkFrontendApi}
      navigate={(to) => push(to)}
    >
      {children}
    </ClerkProvider>
  );
}

export default App;