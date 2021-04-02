import React from 'react';
import './App.css';
import SearchInstitution from './components/SearchInstitution/SearchInstitution';

class App extends React.Component {
	findInstitution(
		selectedCity: string,
		selectedDegreeLevel: string,
		selectedAcademeicProgram: string | undefined
	) {
		// TODO: Perform search here
		console.log(
			selectedCity,
			selectedDegreeLevel,
			selectedAcademeicProgram
		);
	}

	render() {
		return (
			<div className="App">
				<SearchInstitution performSearch={this.findInstitution} />
			</div>
		);
	}
}

export default App;
