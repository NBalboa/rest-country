async function fetchCountry({ queryKey }) {
	const name = queryKey[1];
	if (!name) {
		return [];
	}
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	const data = await res.json();

	return data || [];
}

export default fetchCountry;
