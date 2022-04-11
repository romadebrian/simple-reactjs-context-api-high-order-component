import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import GlobalProvider from "./Context";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default GlobalProvider(App);
