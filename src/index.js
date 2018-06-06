import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
  initialState: {
    products: [
      {name: 'dva', id: 1},
      {name: 'antd', id: 2},
    ],
    dividingRule: {
      typeName: 'vertical',
      number: 5,
      length: 1500
    }
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/divider').default);
app.model(require('./models/panels').default);
app.model(require('./models/operationPanel').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
