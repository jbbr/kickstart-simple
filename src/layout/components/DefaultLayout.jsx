import { Component, PropTypes } from 'react';

export default class DefaultLayout extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  componentWillMount() {
    require('./DefaultLayout.import.css');
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
