import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";

// Lazy-loaded Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const Listings = lazy(() => import("./pages/Listings"));
const ListingDetail = lazy(() => import("./pages/ListingDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const Agent = lazy(() => import("./pages/Agent"));

// Protected Route Component
const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={() => (isAuthenticated ? children : <Redirect to="/login" />)}
    />
  );
};

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/listings" exact>
            <Listings />
          </Route>
          <Route path="/listings/:listingId">
            <ListingDetail />
          </Route>
          <Route path="/agent">
            <Agent />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:blogId">
            <Blog />
          </Route>
          <Route path="/signup">
            {!isAuthenticated ? <Signup /> : <Redirect to="/" />}
          </Route>
          <Route path="/login">
            {!isAuthenticated ? <Login /> : <Redirect to="/" />}
          </Route>
          <ProtectedRoute path="/protected-route">
            {/* Replace with your protected component */}
            <div>Protected Content</div>
          </ProtectedRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
