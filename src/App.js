import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <p>chat /</p>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
