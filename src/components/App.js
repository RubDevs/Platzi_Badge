import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BadgeNew from "../pages/BadgeNew";
import BadgeEdit from "../pages/BadgeEdit";
import Badges from "../pages/Badges";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import Characters from "../pages/Characters";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Badges} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badge/new" component={BadgeNew} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/badge/:badgeId/edit" component={BadgeEdit} />
          <Route
            exact
            path="/badge/:badgeId"
            component={BadgeDetailsContainer}
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
