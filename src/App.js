import { Navbar, PerceptronNetworkBody, Sidebar, Panel } from "./Components";
import { NeuralNetContextProvider } from './Contexts/context';
import './app.css'

function App() {
	return (
		<NeuralNetContextProvider>
			<div className="app">
				<Navbar />
				<Sidebar />
				<PerceptronNetworkBody />
				<Panel/>
			</div>
		</NeuralNetContextProvider>
	);
}

export default App;