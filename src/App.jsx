import Nav from "./component/Nav";
import SearchCountry from "./component/SearchCountry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<Nav />
					<Routes>
						<Route path="/" element={<SearchCountry />} />
					</Routes>
				</QueryClientProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
