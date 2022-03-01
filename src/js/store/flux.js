const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: [],
			tempIndex: null
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
					.then(myAgenda => { // setting "myAgenda" to match the Jsonified response
						setStore({ agenda: myAgenda }); // setting agenda as myAgenda
						console.log("myAgenda ", myAgenda); //logging all current API contacts
					})
					.catch(error => console.log(error)); // logging any API errors
			},

			addNewContact: (na, em, ad, ph) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
					method: "POST",
					body: JSON.stringify({
						full_name: na,
						email: em,
						agenda_slug: "jarraxus",
						address: ad,
						phone: ph
					}), // data can be a `string` or  an {object} which comes from somewhere further above in our application
					headers: {
						"Content-Type": "application/json"
					}
				}) // fetching API data
					.then(response => {
						getActions().getData();
						return response.json(); // converting fetched data to Json
					})
					.then(data => {
						// console.log("data is ", data);
					})
					.catch(error => console.log(error)); // logging any API errors
			},

			editContact: (na, em, ad, ph, id) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					body: JSON.stringify({
						full_name: na,
						email: em,
						agenda_slug: "jarraxus",
						address: ad,
						phone: ph
					}), // data can be a `string` or  an {object} which comes from somewhere further above in our application
					headers: {
						"Content-Type": "application/json"
					}
				}) // fetching API data
					.then(response => {
						getActions().getData();
						return response.json(); // converting fetched data to Json
					})
					.then(data => {
						// console.log("data is ", data);
					})
					.catch(error => console.log(error)); // logging any API errors
			},
			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				}) // fetching API data
					.then(response => {
						getActions().getData();
						return response.json(); // converting fetched data to Json
					})
					.then(data => {
						// console.log("data is ", data);
					})
					.catch(error => console.log(error)); // logging any API errors
			},
			setTempIndex: id => {
				setStore({ tempIndex: id });
			}
		}
	};
};

export default getState;
