import { Component, PropTypes } from 'react';

export default class TodoForm extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
  }

  handleSubmit = (event) => {
    // Prevent default browser form submit
    event.preventDefault();

    // Delegate actual work to "smart" component
    this.props.addTask(event.target.text.value);

    // Clear form
    event.target.text.value = '';
  }

  render() {
    return (
      <form className="new-task" onSubmit={this.handleSubmit}>
        <input type="text" name="text" placeholder="Type to add new tasks" />
      </form>
    );
  }
}
