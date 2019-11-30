import React, { Component } from "react";
import "./TodoApp.css";
// import _ from "lodash";
import TodoList from "./TodoList";

export default class TodoApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// todoItems: [{ title: "hello", isComplete: true }, { title: "world" }]
		};
	}

	render() {
		const { todoItems } = this.state;

		return (
			<React.Fragment>
				<div className="todo-app">
					<TodoList todoItems={todoItems}>
						{<TodoList todoItems={todoItems} />}
					</TodoList>
				</div>
			</React.Fragment>
		);
	}
}
