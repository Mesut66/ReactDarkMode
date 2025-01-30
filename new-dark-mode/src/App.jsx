import { useState } from 'react';
import ToggleSwitch from './components/toggleSwitch.jsx';

import './App.css';
function App() {
	const [theme, setTheme] = useState('light');
	// ToggleSwitch state
	const [isOn, setIsOn] = useState(false);

	// Switch Theme Function
	const handleToggle = () => {
		setIsOn(!isOn);

		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	return (
		<>
			<div className='switch-container'>
				<span className='sun'>🔆</span>
				<ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
				<span className='moon'>🌙</span>
			</div>
			<div className='page'>
				<h3>Dark Mode Toggle</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					perferendis fugiat, accusantium aspernatur, nam eius voluptatem dolore
					nulla fugit exercitationem enim porro assumenda eveniet possimus non
					atque dicta repellat officia!
				</p>
				<button onClick={handleToggle}>Anahtar</button>
			</div>
		</>
	);
}

export default App;