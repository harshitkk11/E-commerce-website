import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import axios from "axios";

import { UserContextProvider } from "./contexts/UserContexts";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
const UserData = lazy(() => import("./components/UserData"));
const Admin = lazy(() => import("./pages/AdminPanel"));
const Home = lazy(() => import("./pages/HomePage"));
const Login = lazy(() => import("./pages/LoginPage"));
const Signup = lazy(() => import("./pages/SignupPage"));
const VerifyMail = lazy(() => import("./pages/VerifyMailPage"));
const Verify = lazy(() => import("./pages/VerifyPage"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

const App = () => {
  const verify = localStorage.getItem("verify");

  useEffect(() => {
    let interval = setInterval(() => {
      localStorage.removeItem("verify");
    }, 1000 * 300);
    return () => clearInterval(interval);
  });

  return (
    <UserContextProvider>
      <>
        <UserData />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Navbar />
                <Home />
                <Footer/>
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense>
                <Navbar />
                <Login />
              </Suspense>
            }
          />

          <Route
            path="/signup"
            element={
              <Suspense>
                <Navbar />
                <Signup />
              </Suspense>
            }
          />

          <Route
            path="/verifymail"
            element={
              verify != "true" ? (
                <Navigate replace to="/signup" />
              ) : (
                <Suspense>
                  <Navbar />
                  <VerifyMail />
                </Suspense>
              )
            }
          />

          <Route
            path="/verify"
            element={
              verify != "true" ? (
                <Navigate replace to="/signup" />
              ) : (
                <Suspense>
                  <Navbar />
                  <Verify />
                </Suspense>
              )
            }
          />

          <Route
            path="/admin"
            element={
              <Suspense>
                <Admin />
              </Suspense>
            }
          />

          <Route
            path="*"
            element={
              <Suspense>
                <Navbar />
                <PageNotFound />
              </Suspense>
            }
          />
        </Routes>
      </>
    </UserContextProvider>
  );
};

export default App;
