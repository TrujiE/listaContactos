const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			newContacto: {},
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
            onContacthange: evento => {
                const {detalle} = getStore();
                const newContact={[evento.target.name]: evento.target.value};
                setStore({detalle:{...detalle,[evento.target.name]: evento.target.value}});
            },
			contacto: method => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", method)
					.then(response => response.json())
					.then(data => setStore({ newContacto: data }))
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
