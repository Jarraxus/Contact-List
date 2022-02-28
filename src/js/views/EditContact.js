import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = props => {
	let data = props.location.state;
	const { store, actions } = useContext(Context);
	const [name, setName] = useState(data.full_name);
	const [email, setEmail] = useState(data.email);
	const [phone, setPhone] = useState(data.phone);
	const [address, setAddress] = useState(data.address);

	console.log("THE DATA BE ", data);

	const createEdit = (na, em, ad, ph) => {
		fetch(`https://assets.breatheco.de/apis/fake/contact/${data.id}`, {
			method: "PUT",
			body: JSON.stringify({
				full_name: na,
				email: em,
				agenda_slug: "jarraxus",
				address: ad,
				phone: ph
			}), // data can be a `string` or  an {object} which comes from somewhere further above in our application
			headers: {
				"Content-Type": "application/json"
			}
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
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							value={name}
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							value={email}
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							value={phone}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							value={address}
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={async () => {
								createEdit(name, email, phone, address);
							}}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	location: PropTypes.object
};
