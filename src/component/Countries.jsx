import CountryCard from "./CountryCard";
import { useQuery } from "@tanstack/react-query";
import fetchCountries from "../BurgerFetch/fetchCountries";
import fetchCountry from "../BurgerFetch/fetchCountry";
import Loaders from "./Loaders";

// eslint-disable-next-line react/prop-types, no-unused-vars
function Countries({ data }) {
	const result = useQuery(["country"], fetchCountries);

	const searchResult = useQuery(["search", data], fetchCountry);

	if (result.isLoading) {
		return <Loaders />;
	}
	if (searchResult.isLoading) {
		return <Loaders />;
	}

	// eslint-disable-next-line no-unused-vars
	const COUNTRIES = result.data;
	const SEARCH = searchResult.data || [];

	return (
		<div className="container-fluid">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{SEARCH.length > 0
					? SEARCH.map((item, index) => {
							return <CountryCard key={index} country={item} />;
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }) // eslint-disable-next-line no-mixed-spaces-and-tabs
					: COUNTRIES.map((item, index) => {
							return <CountryCard key={index} country={item} />;
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  })}
			</div>
		</div>
	);
}

export default Countries;
