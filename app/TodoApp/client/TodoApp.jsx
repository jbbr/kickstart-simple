import { Component, PropTypes } from 'react';

export default class TodoApp extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  componentWillMount() {
    require('./css/TodoApp.import.css');
  }

  doSomething(n: number): string {
    console.log('doSomething has been called with', n);
    return n.toString();
  }

  render() {
    return (
      <div>
        <p><button onClick={() => this.doSomething('sdfsdf')}>Call with wrong type</button></p>
        <p><button onClick={() => this.doSomething(123)}>Call with correct type</button></p>
        {this.props.children}
      </div>
    );
  }
}
