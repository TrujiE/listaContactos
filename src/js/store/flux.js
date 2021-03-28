const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			lista: {},
			lista2: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			lista: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/2332")
					.then(response => response.json())
					.then(data => setStore({ lista: data }))
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
