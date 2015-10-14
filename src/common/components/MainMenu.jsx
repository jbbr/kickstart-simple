import React from 'react';
import { Link } from 'react-router';

export default class MainMenu extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Todos</Link>
        &nbsp;| <Link to="/notes">Notes</Link>
      </div>
    );
  }
}
