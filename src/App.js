// import "./App.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Room from "./components/Room/Room";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route  path="/room" component={Room} />
      </div>
    </Router>
  );
}

export default App;
