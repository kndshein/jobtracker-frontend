import "./App.css";

import Login from "./components/Login";

function App() {
  const backendUrl = "http://localhost:3000";
  return (
    <div className="App">
      <Login backendUrl={backendUrl} />
    </div>
  );
}

export default App;
