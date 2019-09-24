import React from "react";
import PropTypes from "prop-types";

export const ListElement = props => {
	return (
		<li className="display" key={props.key}>
			{props.name}{" "}
			<span>
				<i className="fas fa-times" onClick={props.action} />
			</span>
		</li>
	);
};

ListElement.propTypes = {
	name: PropTypes.string,
	key: PropTypes.number,
	action: PropTypes.func
};
