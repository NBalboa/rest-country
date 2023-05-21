// import BurgerLogo from "../assets/burger.png";
import ph from "../assets/ph.jpg";

function Nav() {
	return (
		<nav className="navbar bg-warning">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold fs-4" href="#">
					<img
						src={ph}
						alt="Burger Logo"
						width="52"
						height="48"
						className="me-2"
						style={{ borderRadius: "50%" }}
					/>
					CountryHub
				</a>
			</div>
		</nav>
	);
}

export default Nav;
