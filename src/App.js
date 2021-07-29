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
} from '@clerk/clerk-react';
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  useHistory 
} from 'react-router-dom';

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

function App() {
  return (
    <Router>
      <ClerkProviderWithNavigate>
        <Switch>
          <Route path="/sign-in/(.*)?">
            <SignIn routing="path" path="/sign-in" />
          </Route>
          <Route path="/sign-up/(.*)?">
            <SignUp routing="path" path="/sign-up" />
          </Route>
          <Route>
            <SignedIn>
              <div className="app">
                <Header />
                <Formular />
              </div>
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </Route>
        </Switch>
      </ClerkProviderWithNavigate>
    </Router>
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