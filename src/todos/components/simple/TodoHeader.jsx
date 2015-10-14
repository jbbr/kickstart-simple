import { Component, PropTypes } from 'react';


export default class TodoHeader extends Component {
  static propTypes = {
    hideCompleted: PropTypes.bool,
    toggleHideCompleted: PropTypes.func.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    children: PropTypes.any.isRequired
  }

  render() {
    return (
      <header>
        <h1>
          <img src={require('../../img/check.png')} alt="" />
          Todo List ({this.props.incompleteCount})
        </h1>

        <label className="hide-completed">
          <input type="checkbox" checked={this.props.hideCompleted} onChange={this.props.toggleHideCompleted} />
          Hide Completed Tasks
        </label>


        {this.props.children}
      </header>
    );
  }
}
