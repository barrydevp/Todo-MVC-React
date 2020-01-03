import React, { Component } from "react";
// import _ from "lodash";

export default class Footer extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		const { todoItems, activeTodoCount, currentFilter, changeFilter, clearCompleted } = this.props;

		return (
			<footer className="footer" >
				<span className="todo-count"> {`${activeTodoCount} item left`} </span>
				<ul className="filters">
					<li>
						<a className={currentFilter === 'all' ? "selected" : ""} href="#/" onClick={changeFilter("all")}>All</a>
					</li>	
					<li>
						<a className={currentFilter === 'active' ? "selected" : ""} href="#/active" onClick={changeFilter("active")}>Active</a>
					</li>	
					<li>
						<a className={currentFilter === 'completed' ? "selected" : ""} href="#/completed" onClick={changeFilter("completed")}>Completed</a>
					</li>					
				</ul>
				{
					todoItems.findIndex(e => e.isComplete) != -1 && <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
				}
			</footer>
			);
	}
}
