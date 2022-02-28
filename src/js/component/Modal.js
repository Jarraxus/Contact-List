import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		//initialize state here
	});

	const deleteContact = id => {
		fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
			method: "DELETE"
		}) // fetching API data
			.then(response => {
				actions.getData();
				return response.json(); // converting fetched data to Json
			})
			.then(data => {
				console.log("data is ", data);
			})
			.catch(error => console.log(error)); // logging any API errors
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: This will permanently delete the contact!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={() => props.onClose()}>
							Cancel
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => {
								props.onClose();
								deleteContact(store.tempIndex);
							}}
							data-dismiss="modal">
							Confirm Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
