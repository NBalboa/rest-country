// import axios from "axios";

// eslint-disable-next-line no-unused-vars
async function fetchCountries({ queryKey }) {
	const res = await fetch("https://restcountries.com/v3.1/all");
	const data = await res.json();

	return data ?? [];
}

export default fetchCountries;
