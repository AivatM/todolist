import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Alert from "./components/Alert/Alert";
import { AlertState } from "./context/alert/AlertState";

const App = (props) => {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Alert />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
};
export default App;
