import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const backendUrl = "http://localhost:3000";
  return (
    <div className="App">
      <Login backendUrl={backendUrl} />
      <Register backendUrl={backendUrl} />
    </div>
  );
}

export default App;
