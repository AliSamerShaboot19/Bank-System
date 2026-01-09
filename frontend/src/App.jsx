import VerifyDeposit from "./pages/VerifyDeposit";
import Notifications from "./pages/Notifications";
import ProtectedRoue from "./components/ProtectedRoue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Transictions from "./pages/Transictions";
import Transfer from "./pages/Transfer";
import Profile from "./pages/Profile";
import TransictionCard from "./components/TransictionCard";
import Deposit from "./pages/Deposit";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoue>
                <Dashboard />
              </ProtectedRoue>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoue>
                <Transictions />
              </ProtectedRoue>
            }
          />{" "}
          <Route
            path="/transfer"
            element={
              <ProtectedRoue>
                <Transfer />
              </ProtectedRoue>
            }
          />{" "}
          <Route
            path="/profile"
            element={
              <ProtectedRoue>
                <Profile />
              </ProtectedRoue>
            }
          />{" "}
          <Route
            path="/mycard"
            element={
              <ProtectedRoue>
                <TransictionCard />
              </ProtectedRoue>
            }
          />{" "}
          <Route
            path="/deposit"
            element={
              <ProtectedRoue>
                <Deposit />
              </ProtectedRoue>
            }
          />
          <Route
            path="/verify-deposit"
            element={
              <ProtectedRoue>
                <VerifyDeposit />
              </ProtectedRoue>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoue>
                <Notifications />
              </ProtectedRoue>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
