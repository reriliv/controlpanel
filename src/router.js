import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import DividingRule from './routes/DividingRule';
import Panels from './routes/Panels';
import operationPanel from './routes/Panel/operationPanel';
import Test from './routes/Test';

function RouterConfig({ history }) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/test" exact component={Test} />
          <Route path="/products" exact component={Products} />
          <Route path="/rules" exact component={DividingRule} />
          <Route path="/panels" exact component={Panels} />
          <Route path="/operationPanel" exact component={operationPanel} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
