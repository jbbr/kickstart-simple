import { Route, IndexRoute } from 'react-router';
import ReactRouterSSR from 'react-router-ssr';

import App from './common/components/App';

import TodoContainer from './todos/components/TodoContainer';
import NoteContainer from './notes/components/NoteContainer';

ReactRouterSSR.Run(
  <Route path="/" component={App}>
    <Route path="/notes" component={NoteContainer} />
    <IndexRoute component={TodoContainer} />
  </Route>
);
