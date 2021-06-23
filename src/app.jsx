import React, {Fragment, useState} from 'react';
import { hot } from 'react-hot-loader/root';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




class App extends React.Component {
render() {
  return (

    <Fragment>
      <div className='main'>
        hello!
    {/* <Router>
      <Nav />
      <Switch>
      <Route path="/" exact component={ImageMap} />
      <Route path="/fire" component={Fire} />
      <Route path="/glaze" component={Glaze} />
      </Switch>
      </Router> */}
      </div>

    </ Fragment>

  );
}

};

export default App;