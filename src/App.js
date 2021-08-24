import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import "./App.scss";

// Component imports
import HomePage from "./pages/HomePage/HomePage.jsx";
import JobPage from "./pages/JobPage/JobPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

// Provider imports
import { UserProfileContext } from "./context-global/UserProfileContext";

function App() {
  const { state } = useContext(UserProfileContext);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/jobs">
            {!state.isLoggedIn ? <Redirect to="/" /> : <JobPage />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
