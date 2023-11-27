import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<div className='navegacao'>
				<h2>Projeto Final Prog Web</h2>
				<Outlet />
			</div>
		</>
	);
}

export default App;
