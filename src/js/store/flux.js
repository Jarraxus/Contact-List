const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jarraxus")
					.then(response => {
						var contentType = response.headers.get("content-type");
						if (contentType && contentType.includes("application/json")) {
							return response.json();
						}
						throw new TypeError("Sorry, There's no JSON here!");
					})
					.then(myAgenda => {
						setStore({ agenda: myAgenda });
						console.log("myAgenda ", myAgenda);
					})
					.catch(error => console.log(error));
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
