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
			}
		}
	};
};

export default getState;
