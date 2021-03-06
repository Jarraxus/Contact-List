import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cageface from "../../img/cageface.jpg";
import { Context } from "../store/appContext";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	// console.log("props.contact", props.contact);

	return (
		<li className="list-group-item">
			<div className="row w-100">
				<div className="col-12 col-sm-6 col-md-2 px-0">
					<img src={cageface} alt="Mike Anamendolla" className="rounded-circle mx-auto d-block img-fluid" />
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
					<div className=" float-right">
						<Link to={{ pathname: `/edit`, state: props.contact }}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3" />
							</button>
						</Link>
						<button
							className="btn"
							onClick={() => {
								props.onDelete();
								actions.setTempIndex(props.contact.id); // setting the tempIndex with this items ID, then deleting from agenda on flux.js
							}}>
							<i className="fas fa-trash-alt" />
						</button>
					</div>
					<label className="name lead">{props.contact.full_name}</label>
					<br />
					<i className="fas fa-map-marker-alt text-muted mr-3" />
					<span className="text-muted">{props.contact.address}</span>
					<br />
					<span
						className="fa fa-phone fa-fw text-muted mr-3"
						data-toggle="tooltip"
						title=""
						data-original-title="(870) 288-4149"
					/>
					<span className="text-muted small">{props.contact.phone}</span>
					<br />
					<span
						className="fa fa-envelope fa-fw text-muted mr-3"
						data-toggle="tooltip"
						data-original-title=""
						title=""
					/>
					<span className="text-muted small text-truncate">{props.contact.email}</span>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contact: PropTypes.object, //This is what ties to contact={item} in Contacts.js
	index: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
