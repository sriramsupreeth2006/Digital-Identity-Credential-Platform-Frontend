import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import HelpCenter from "./HelpCenter"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<h1>Home Page</h1>} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
