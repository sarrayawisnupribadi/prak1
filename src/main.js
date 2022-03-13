import React from "react";
import Bmi from "./pages/bmi";
import Bank from "./pages/bank";
import Final from "./pages/final";
import Binary from "./pages/binary";
import Octal from "./pages/octal";
import Decimal from "./pages/decimal";
import Hexadecimal from "./pages/hexadecimal";
import { Route, Switch } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/bmi" component={Bmi} />
        <Route path="/bank" component={Bank} />
        <Route path="/final" component={Final} />
        <Route path="/binary" component={Binary} />
        <Route path="/octal" component={Octal} />
        <Route path="/decimal" component={Decimal} />
        <Route path="/hexadecimal" component={Hexadecimal} />
      </Switch>
    );
  }
}
