import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const EditContact = props => {
	let data = props.location.state;
	const { store, action } = useContext(Context);
	let contact = store.agenda[data];
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit an existing contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" placeholder={contact.full_name} />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder={contact.email} />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder={contact.phone} />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder={contact.address} />
					</div>
					<button type="button" className="btn btn-primary form-control">
						update contact
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	location: PropTypes.number
};
