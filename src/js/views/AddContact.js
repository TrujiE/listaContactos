import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const detalle = {
		agenda_slug: "agenda_aron",
		full_name: "",
		email: "",
		phone: "",
		address: ""
	};
	const config = {
		headers: { "Content-Type": "Application/json" },
		body: JSON.stringify([{ detalle }]),
		method: "POST"
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							id="full_name"
							name="full_name"
							className="form-control"
							placeholder="Full Name"
							onChange={event => setNombre(event.target.value)}
							//value={nombre}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							id="email"
							className="form-control"
							placeholder="Enter email"
							onChange={event => setEmail(event.target.value)}
							//value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							id="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setPhone(event.target.value)}
							//value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							id="address"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setAddress(event.target.value)}
							//value={address}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							detalle.full_name = document.getElementById("full_name").value;
							detalle.email = document.getElementById("email").value;
							detalle.phone = document.getElementById("phone").value;
							detalle.address = document.getElementById("address").value;
							//alert({ detalle });
							actions.contacto(config);
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
