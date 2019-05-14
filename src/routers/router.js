import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

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
import Login from "../pages/ui/Login";
import FormRegister from "../pages/ui/FormRegister";
import BaseTable from "../pages/ui/BaseTable";
import HighTable from "../pages/ui/HighTable";

import NoMatch from "../components/NoMatch/NoMatch";



export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
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
                  <Route path="/admin/ui/messages" component={Messages} />
                  <Route path="/admin/ui/tabs" component={Tabs} />
                  <Route path="/admin/ui/gallery" component={Gallery} />
                  <Route path="/admin/ui/carousel" component={Carousel} />
                  <Route path="/admin/form/login" component={Login} />
                  <Route path="/admin/form/reg" component={FormRegister} />
                  <Route path="/admin/table/basic" component={BaseTable} />
                  <Route path="/admin/table/high" component={HighTable} />

                  <Route  component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}
