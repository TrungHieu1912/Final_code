import React, { Component } from 'react';
import './style/App.css';
import Login from './component/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './component/Loading';
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
  constructor(props) {
    super(props);
    this.state = {
      load: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: false });
    }, 2000);

  }
  render() {
    console.log('alo', this.state.load)
    return (
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/">
              {this.state.load == true ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              {this.state.load == true ? <Loading/> : <Login />}
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}


export default App;




