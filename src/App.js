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
//     <Router>
//     <ClerkProviderWithNavigate>
//       <Switch>
// {/* Public routes, accesible whether or not a user is signed in */}
//         <Route path="/public">
//           <div>
//             Report animal without signing in. <Link to="/">Return home.</Link>
//           </div>
//         </Route>
//         <Route path="/sign-in/(.*)?">
//           <SignIn routing="path" path="/sign-in" />
//         </Route>
//         <Route path="/sign-up/(.*)?">
//           <SignUp routing="path" path="/sign-up" />
//         </Route>
// {/* Private routes, accesible only if a user is signed in */}
//         <PrivateRoute path="/private">
//           <div>
//             Your Dashboard. <Link to="/">Return home.</Link>
//           </div>
//         </PrivateRoute>
//         <PrivateRoute path="/user/(.*)?">
//           <UserProfile routing="path" path="/user" />
//         </PrivateRoute>
// {/* Catch-all route will render if no other route renders */}
//         <Route>
//       <SignedIn>
//         <UserButton />
//         <Greeting />
//         <div>Your are signed in.</div>
//         <Navigation />
        <div className="app">   
          <Header />
          <Formular />
        </div> 
  //     </SignedIn>
  //     <SignedOut>
  //       <div>You are signed out.</div>
  //       <Navigation />
  //     </SignedOut>
  //     </Route>
  //     </Switch>
  //   </ClerkProviderWithNavigate>
  //   </Router>
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
  )
}

function Greeting() {
  const { firstName } = useUser();
  return <div>Hello, {firstName}!</div>
}

function PrivateRoute(props) {
  // If the route matches but the user in not signed in, redirect to /sign-in
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
  )
}

export default App;