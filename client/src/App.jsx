import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { EmailContextProvider } from "./context/VerifyMailContext";

const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const VerifyMail = lazy(() => import("./components/VerifyMail"));

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <EmailContextProvider>
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/verifymail"
            element={
              <Suspense>
                <VerifyMail />
              </Suspense>
            }
          />
        </Routes>
      </>
    </EmailContextProvider>
  );
}

export default App;
