import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Link to='/'>HOME</Link>{" - "}
      <Link to='/cats'>All Cats</Link>{" - "}
      <Link to='/dogs'>All Dogs</Link>{" - "}
      <Link to='/submit'>SUBMIT</Link>
      <Switch>
      </Switch>
      </div>
    );
  }
}

export default App;
