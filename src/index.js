import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';

import store from "./store";

render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById("root")
);

serviceWorker.register();
