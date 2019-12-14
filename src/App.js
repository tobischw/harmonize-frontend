import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Home from "./containers/Home";
import Channel from "./containers/Channel";
import Setting from "./containers/Setting";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

import theme from "./theme"

const NotFound = () => {
  return <div>Not Found</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
  componentDidMount() {
    //const { dispatch } = this.props
    //dispatch
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ height: "100vh" }}>
          <Router>
            <Switch>
              <DashboardRoute path="/dashboard" component={Home} />
              <DashboardRoute path="/setting" component={Setting} />
              <DashboardRoute exact path="/" component={Channel} />
              <EmptyRoute component={NotFound} />
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  /*const { selectedSubreddit, postsBySubreddit } = state
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
    selectedSubreddit
  ] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }*/
}

export default connect(mapStateToProps)(App)