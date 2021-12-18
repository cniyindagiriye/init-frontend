import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { loadIcons } from './config/icon-loader';

loadIcons();

const rootEl = document.getElementById('root');

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
        <div>
          <Component />
        </div>,
    rootEl
  );

render(App);
