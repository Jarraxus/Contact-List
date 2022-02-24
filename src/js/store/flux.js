const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			getData: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jarraxus") // fetching API data
					.then(response => {
						var contentType = response.headers.get("content-type");
						if (contentType && contentType.includes("application/json")) {
							return response.json(); // converting fetched data to Json
						}
						throw new TypeError("Sorry, There's no JSON here!");
					})
					.then(myAgenda => {
						// setting "myAgenda" to match the Jsonified response
						setStore({ agenda: myAgenda }); // setting agenda as myAgenda
						console.log("myAgenda ", myAgenda); //logging all current API contacts
					})
					.catch(error => console.log(error)); // logging any API errors
			},
			addContact: () => {},

			deleteContact: () => {},

			editContact: () => {}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
