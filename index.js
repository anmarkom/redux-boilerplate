import React from 'react';
import ReactDOM from 'react-dom';

const init = () => {
  const placeholder = document.querySelector('#APP_NAME-root');

  if (!placeholder) {
    return;
  }

  import(/* webpackChunkName: "APP_NAME" */'./containers/Root')
    .then(({ default: App }) => ReactDOM.render(<App />, placeholder));
};

export default init;
