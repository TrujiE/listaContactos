import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import MikePhoto from "../../img/m101.jpg";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { store, actions } = useContext(Context);
	const [resultado, setResultado] = useState([]);
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_aron")
			.then(response => response.json())
			.then(data => setResultado(data))
			.catch(error => console.error(error));
	}, []);

	const contactos = (
		<div>
			{" "}
			{resultado
				? resultado.map((elemento, indice) => {
						return (
							<div id={indice} key={indice}>
								<li className="list-group-item">
									<div className="row w-100">
										<div className="col-12 col-sm-6 col-md-3 px-0">
											<img
												src={MikePhoto}
												alt="Mike Anamendolla"
												className="rounded-circle mx-auto d-block img-fluid"
											/>
										</div>
										<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
											<div className=" float-right">
												<button className="btn">
													<i className="fas fa-pencil-alt mr-3" />
												</button>
												<button className="btn" onClick={() => props.onDelete()}>
													<i className="fas fa-trash-alt" />
												</button>
											</div>
											<label className="name lead">{elemento.full_name}</label>
											<br />
											<i className="fas fa-map-marker-alt text-muted mr-3" />
											<span className="text-muted">{elemento.address}</span>
											<br />
											<span
												className="fa fa-phone fa-fw text-muted mr-3"
												data-toggle="tooltip"
												title=""
												data-original-title="(870) 288-4149"
											/>
											<span className="text-muted small">{elemento.phone}</span>
											<br />
											<span
												className="fa fa-envelope fa-fw text-muted mr-3"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											/>
											<span className="text-muted small text-truncate">{elemento.email}</span>
										</div>
									</div>
								</li>
							</div>
						);
				  })
				: "loading..."}
		</div>
	);

	return <div>{contactos}</div>;
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
