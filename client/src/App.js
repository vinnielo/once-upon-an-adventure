import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import Team from "./pages/Team";
import User from "./pages/User";
import Continue from "./pages/Continue";
import New from "./pages/New";
import World from "./features/world";
// import Store from "./config/store";
import CastleGame from "./pages/CastleGame";
import ForestGame from "./pages/ForestGame";
import CliffGame from "./pages/CliffGame";
import InnerCastle from "./pages/InnerCastle";
import ForestStore from "./pages/ForestStore"
import ComingSoon from "./components/ComingSoon/ComingSoon";
import YouWin from "./components/ComingSoon/YouWin";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/react-rpg"]}>
            <Home />
          </Route>

            <Route exact path="/team">
              <Team />
            </Route>

            <Route exact path="/user/:id?">
              <User />
            </Route>

            <Route exact path="/continue/:id?">
              <Continue />
            </Route>

            <Route exact path="/new/:id?">
              <New />
            </Route>

            <Route exact path="/castle/:id?">
              <CastleGame />
            </Route>

            <Route exact path="/forest/:id?">
              <ForestGame />
            </Route>

            <Route path="/store/:id?">
              <ForestStore />
            </Route>

            <Route path="/cliffs/:id?">
              <CliffGame />
            </Route>

            <Route path="/throne/:id?">
              <InnerCastle />
            </Route>

            <Route path="/youlose/:id?">
              <ComingSoon />
            </Route>

            <Route path="/youwin/:id?">
              <YouWin />
            </Route>

            <Route path="/test" component={WorldPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const WorldPage  = () => (<div id="this-window"><World /></div>)
