export class Client {

	_fetch(url) {
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
	}
	profile(firstname, lastname) {
		const lookupName = firstname.toLowerCase() + '-' + lastname.toLowerCase();
		const url = `https://www.abgeordnetenwatch.de/api/parliament/bundestag/profile/${lookupName}/profile.json`;
		return this._fetch(url);
	}
	allParliaments() {
		const url = 'https://www.abgeordnetenwatch.de/api/parliaments.json';
		return this._fetch(url);
	}
	parliament(state, type) {
		const url = `https://www.abgeordnetenwatch.de/api/parliament/${state}/${type}.json`
		return this._fetch(url);
	}
	subset(state, type, subset) {
		const url = `https://www.abgeordnetenwatch.de/api/parliament/${state}/${type}.json?subsets=${subset}`
		return this._fetch(url);
	}
};