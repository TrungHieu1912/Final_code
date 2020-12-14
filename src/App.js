import React, { Component } from 'react';
import './App.css';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './component/DashBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { connect } from 'react-redux';
class App extends Component {

  render() {
    const { token } = this.props;
    let redirectUrl = token ? <Redirect to="/dashboard" /> : <Redirect to="/Login" />
    return (
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/">
              {redirectUrl}
            </Route>
            <Route exact path="/Login">
              {redirectUrl}
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              {redirectUrl}
              <DashBoard></DashBoard>
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.user.token,
});

const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(App);




