import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Home from "../pages/Home/Home";
import Buttons from "../pages/ui/Buttons";
import Modals from "../pages/ui/Modals";
import Loadings from "../pages/ui/Loadings";
import Notification from "../pages/ui/Notification";
import Messages from "../pages/ui/Messages";
import Tabs from "../pages/ui/Tabs";
import Gallery from "../pages/ui/Gallery";
import Carousel from "../pages/ui/Carousel";

import NoMatch from "../components/NoMatch/NoMatch";



export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/home" component={Home} />
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loadings} />
                  <Route path="/admin/ui/notification" component={Notification} />
                  <Route path="/admin/ui/tabs" component={Tabs} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousel} />
                  <Redirect to="/admin/home"></Redirect>    
                </Switch>
              </Admin>
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}
