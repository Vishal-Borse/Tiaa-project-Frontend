import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
import Routes from "./router/Router";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
