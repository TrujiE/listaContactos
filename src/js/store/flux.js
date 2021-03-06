const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			detalle: {
				agenda_slug: "agenda_aron",
				full_name: "",
				email: "",
				phone: "",
				address: ""
			}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			onContactChange: evento => {
				const { detalle } = getStore();
				const newContact = { [evento.target.name]: evento.target.value };
				setStore({ detalle: { ...detalle, [evento.target.name]: evento.target.value } });
			},
			onContactChange2: evento => {
				const { detalle } = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/" + evento)
					.then(response => response.json())
					.then(data => setStore(data))
					.catch(error => console.log(error));
			},
			onContactOnClick: evento => {
				evento.preventDefault();
				const { detalle } = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(detalle),
					method: "POST"
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
				setStore({
					detalle: {
						agenda_slug: "agenda_aron",
						full_name: "",
						email: "",
						phone: "",
						address: ""
					}
				});
			},
			onContactDelete: evento => {
				fetch("https://assets.breatheco.de/apis/fake" + evento, {
					headers: {
						"Content-Type": "application/json"
					},
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			onContactUpdate: evento => {
				fetch("https://assets.breatheco.de/apis/fake" + evento, {
					headers: {
						"Content-Type": "application/json"
					},
					method: "UPDATE"
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			onAddLimpia: () => {
				evento.preventDefault();
				const { detalle } = getStore();
				setStore({
					detalle: {
						agenda_slug: "agenda_aron",
						full_name: "",
						email: "",
						phone: "",
						address: ""
					}
				});
			}
		}
	};
};

export default getState;
