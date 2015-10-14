import { Component } from 'react';
import ReactMixin from 'react-mixin';
import ReactMeteorData from 'react-meteor-data';

import TodoHeader from './simple/TodoHeader';
import TodoList from './simple/TodoList';
import TodoForm from './simple/TodoForm';

import Tasks from '../collection';

@ReactMixin.decorate(ReactMeteorData)
export default class TodoContainer extends Component {

  state = {
    hideCompleted: false
  }

  getMeteorData() {
    Meteor.subscribe('tasks');

    let taskFilter = {};

    if (this.state.hideCompleted) {
      taskFilter.checked = {$ne: true};
    }

    const tasks = Tasks.find(taskFilter, {sort: {createdAt: -1}}).fetch();
    const incompleteCount = Tasks.find({checked: {$ne: true}}).count();

    return {
      tasks,
      incompleteCount,
      user: Meteor.user()
    };
  }

  handleToggleHideCompleted = (e) => {
    this.setState({ hideCompleted: e.target.checked });
  }

  addTask = (text) => {
    // Insert a task into the collection
    Meteor.call('addTask', text);
  }

  render() {
    if (!this.data.tasks) {
      // loading
      return null;
    }

    return (
        <div className="container">
          <TodoHeader
              incompleteCount={this.data.incompleteCount}
              hideCompleted={this.state.hideCompleted}
              toggleHideCompleted={this.handleToggleHideCompleted}
          >
            <TodoForm addTask={this.addTask}/>
          </TodoHeader>
          <TodoList tasks={this.data.tasks} />
        </div>
    );
  }
};
