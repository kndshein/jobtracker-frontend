import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Component imports
import HomePage from "./pages/HomePage/HomePage.jsx";
import JobPage from "./pages/JobPage/JobPage.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const backendUrl = "http://localhost:3000";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage backendUrl={backendUrl} />
          </Route>
          <Route path="/jobs">
            <JobPage backendUrl={backendUrl} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
