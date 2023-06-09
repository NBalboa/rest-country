import Countries from "./Countries";
import { useState } from "react";

function SearchCountry() {
	const [searchCountry, setSearchCountry] = useState("");

	function handleSearchFruit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		setSearchCountry(formData.get("queryBurger"));
	}

	return (
		<div className="container-fluid">
			<div className="m-5">
				<h1>Search Country</h1>
				<form className="row g3" onSubmit={handleSearchFruit}>
					<div className="col-md-12">
						<label
							htmlFor="queryBurger"
							className="form-label fs-4 fw-bold"
						>
							Country Name
						</label>
						<input
							type="text"
							className="form-control"
							id="queryBurger"
							name="queryBurger"
						/>
					</div>
					<div className="col-12 mt-2">
						<input
							type="submit"
							className="btn btn-primary"
							value="Search"
						/>
					</div>
				</form>
			</div>

			<Countries data={searchCountry} />
		</div>
	);
}

export default SearchCountry;
