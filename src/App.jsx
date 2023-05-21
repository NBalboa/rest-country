import Nav from "./component/Nav";
import SearchCountry from "./component/SearchCountry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useEffect } from "react";
// import axios from "axios";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			cacheTime: Infinity,
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Nav />
				<div className="container-md">
					<SearchCountry />
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
