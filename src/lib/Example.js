import React from "react";
import PropTypes from "prop-types";

const Example = (props) => {
	const { className, label, onClick } = props;
	return (
		<button className={`example${className ? className : ""}`} onClick={onClick}>
			{label || ""}
		</button>
	);
};

Example.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export default Example;