import "isomorphic-fetch"
export class Client {
	profile(firstname, lastname) {
		const lookupName = firstname.toLowerCase() + '-' + lastname.toLowerCase();
		const url = `https://www.abgeordnetenwatch.de/api/parliament/bundestag/profile/${lookupName}/profile.json`;
		return fetch(url)
		.then(function(response) {
			return response.json();
		})
	}
	allParliaments() {
		const url = 'https://www.abgeordnetenwatch.de/api/parliaments.json';
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
	}
	parliament(state, type) {
		const url = `https://www.abgeordnetenwatch.de/api/parliament/${state}/${type}.json`
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
	}
};