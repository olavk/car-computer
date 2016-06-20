import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import { push } from 'redux-router';
const store = configureStore();

window.setScreen = function setScreen(n) {
  if (n === 1) {
    store.dispatch(push({ pathname: '/counter' }));
  } else {
    store.dispatch(push({ pathname: '/' }));
  }
}

render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    render(
      <AppContainer>
        {React.createElement(require('./containers/Root').default, {store})}
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
