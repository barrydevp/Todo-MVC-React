import React, { Component } from "react";
import { connect } from "react-redux";

import "./TodoApp.css";

import TodoList from "./TodoList";
import { todoActions } from "../../store/actions";

class TodoApp extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="todo-app">
          <TodoList {...this.props}>
            {/* {<TodoList todoItems={todoItems} />} */}
          </TodoList>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    todoItems: state.todoItems
  };
};

const mapDispatchToProps = {
  ...todoActions
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
