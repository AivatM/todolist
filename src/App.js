import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AlertContainer from "./components/Alert/AlertContainer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import store from "./redux/store";

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <AlertContainer />
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/about"} exact component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
