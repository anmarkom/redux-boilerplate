import React from 'react';
import ReactDOM from 'react-dom';

const init = () => {
  const placeholder = document.querySelector('#adunits-root');

  if (!placeholder) {
    return;
  }

  import(/* webpackChunkName: "adunits" */'./containers/Root')
    .then(({ default: App }) => ReactDOM.render(<App />, placeholder));
};

export default init;
