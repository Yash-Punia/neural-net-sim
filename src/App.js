import './app.css'
import { Navbar, PerceptronNetworkBody, Sidebar } from "./Components";
import { NeuralNetContextProvider } from './Contexts/context';

function App() {
	return (
		<NeuralNetContextProvider>
			<div className="app">
				<Navbar />
				<Sidebar />
				<PerceptronNetworkBody />
			</div>
		</NeuralNetContextProvider>
	);
}

export default App;