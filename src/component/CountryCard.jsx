/* eslint-disable react/prop-types */
function CountryCard({ country }) {
	let image = country.flags.svg;

	if (!image) {
		image =
			"https://img.freepik.com/free-vector/403-error-forbidden-with-police-concept-illustration_114360-1935.jpg?size=626&ext=jpg";
	}

	return (
		<div className="card">
			<div className="card-header bg-transparent">
				<img
					src={image}
					alt={`flag of ${country.name.common}`}
					style={{ width: "100%", height: "200px" }}
				/>
			</div>
			<div className="card-body">
				<h5 className="card-title">{country.name.common}</h5>
				<p className="card-text">
					Capital: <span className="fw-bold">{country.capital}</span>{" "}
				</p>
				<p className="card-text">
					Region: <span className="fw-bold">{country.region}</span>{" "}
				</p>
				<p className="card-text">
					Subregion:{" "}
					<span className="fw-bold">{country.subregion}</span>{" "}
				</p>

				<p className="card-text">
					Population:{" "}
					<span className="fw-bold">{country.population}</span>{" "}
				</p>
				<p className="card-text">
					Area: <span className="fw-bold">{country.area}</span>{" "}
				</p>
			</div>
		</div>
	);
}

export default CountryCard;
