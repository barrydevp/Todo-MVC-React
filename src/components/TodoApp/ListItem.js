import React, { Component } from "react";
import classNames from "classnames";
import checkBoxImg from "../../images/checkbox.svg";
import verifiedBoxImg from "../../images/verified.svg";
import unCheckBoxImg from "../../images/uncheck.svg";

export default class ListItem extends Component {
	// constructor(props) {
	//   super(props);

	// }

	// componentDidUpdate(prevProps) {
	//     console.log('old props:', prevProps);
	//     console.log('new props:', this.props);
	//     console.log(prevProps.isComplete === this.props.isComplete);
	// }

	render() {
		const { title, isComplete } = this.props.item;
		const className = classNames("todo-item", {
			completed: isComplete
		});
		let url = isComplete ? verifiedBoxImg : checkBoxImg;

		return (
			<li className={className}>
				{/* <input className="toggle" type="checkbox" onClick={this.props.toggleItem} /> */}
				<img
					className="toggle"
					src={url}
					alt="checkbox"
					width="32px"
					height="32px"
					onClick={this.props.toggleItem}
				/>
				<label className="label">{title}</label>
				<img
					className="destroy"
					src={unCheckBoxImg}
					alt="destroy"
					width="15px"
					height="15px"
					onClick={this.props.destroyItem}
				/>
				{/* <button className="destroy" onClick={this.props.destroyItem} /> */}
			</li>
		);
	}
}
