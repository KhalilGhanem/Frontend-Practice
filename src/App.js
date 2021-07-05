import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import Favorite from './components/Favorite';


class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route exact path="/favariote">
              <Favorite/>
            </Route>
            
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;