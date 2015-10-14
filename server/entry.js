
// todos server files
import '../src/todos/server/methods';
import '../src/todos/server/subscriptions';


// Do server-rendering only in proudction mode
if (process.env.NODE_ENV === 'production') {
  // Load Webpack infos for SSR
  ReactRouterSSR.LoadWebpackStats(JSON.parse(Assets.getText('webpack.stats.json')));

  require('../src/routes');
}
