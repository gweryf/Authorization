import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import PrivateRoutes from "./PrivateRoutes";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path="/login" exact />
          <Route element={<SignUp />} path="/signup" exact />
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
