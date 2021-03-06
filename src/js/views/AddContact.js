import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							name="full_name"
							className="form-control"
							placeholder="Full Name"
							onChange={e => actions.onContactChange(e)}
							value={store.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							name="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => actions.onContactChange(e)}
							value={store.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							name="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => actions.onContactChange(e)}
							value={store.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							name="address"
							className="form-control"
							placeholder="Enter address"
							onChange={e => actions.onContactChange(e)}
							value={store.address}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={e => {
							actions.onContactOnClick(e);
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
