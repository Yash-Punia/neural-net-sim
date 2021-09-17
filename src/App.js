import './app.css'
import { Navbar, PerceptronNetworkBody, Sidebar } from "./Components";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Sidebar />
			<PerceptronNetworkBody />
		</div>
	);
}

export default App;