import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HomeApp from './HomeApp';
import CounterApp from './CounterApp';
import DevTools from './DevTools';
import { Route } from 'react-router';
import { ReduxRouter } from 'redux-router';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ReduxRouter>
            <Route path="/" component={HomeApp} />
            <Route path="/counter" component={CounterApp} />
          </ReduxRouter>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
