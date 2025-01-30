const ToggleSwitch = ({ isOn, handleToggle }) => {
	return (
		<div className={`switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
			<div className='knob' />
		</div>
	);
};

export default ToggleSwitch;