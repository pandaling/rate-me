import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './component/Home/Home';
import './App.css';
import { Unknown } from "./component/Unknown/Unknown";
import { Report } from "./component/Report/Report";
import { Notice } from "./component/General/Notice";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home /> </Route>
        <Route path="/report" exact><Report /> </Route>
        <Route path="/submit-rate" exact><Notice /> </Route>
        <Route path="*" exact><Unknown /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
