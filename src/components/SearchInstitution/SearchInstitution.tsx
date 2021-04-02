import { logDOM } from '@testing-library/dom';
import { getHashes } from 'crypto';
import React from 'react';
import {
	KARACHI_DEGREE_LEVELS,
	KARACHI_UNDER_GRADUATE_PROGRAMS,
	PAKISTAN_CITIES,
} from './DemoData';
import './SearchInstitution.css';


interface SearchInstitutionProps {
	performSearch: (
		selectedCity: string,
		selectedDegreeLevel: string,
		selectedAcademeicProgram: string | undefined
	) => void;
}

interface SearchInstitutionState {
	cities: string[];
	degreeLevels: string[];
	academicPrograms: string[];
	selectedCity: string | undefined;
	selectedDegreeLevel: string | undefined;
	selectedAcademeicProgram: string | undefined;
}

class SearchInstitution extends React.Component<
	SearchInstitutionProps,
	SearchInstitutionState
> {
	constructor(props: SearchInstitutionProps) {
		super(props);

		this.state = {
			cities: [],
			degreeLevels: [],
			academicPrograms: [],
			selectedCity: undefined,
			selectedDegreeLevel: undefined,
			selectedAcademeicProgram: undefined,
		};
	}

	componentDidMount() {
		// TODO: Put HTTP request here to fetch cities instead of manually setting the array here
		this.setState((state: SearchInstitutionState) => ({
			...state,
			cities: PAKISTAN_CITIES,
		}));
	}

	onCitySelected(selectedCity: string) {
		// TODO: Put HTTP request here to fetch degree levels based on selected city instead of manually setting the array here
		this.setState((state: SearchInstitutionState) => ({
			...state,
			selectedCity,
			degreeLevels: KARACHI_DEGREE_LEVELS,
		}));
	}

	onDegreeLevelSelected(selectedDegreeLevel: string) {
		// TODO: Put HTTP request here to fetch degree levels based on selected city instead of manually setting the array here
		this.setState((state: SearchInstitutionState) => ({
			...state,
			selectedDegreeLevel,
			academicPrograms: KARACHI_UNDER_GRADUATE_PROGRAMS,
		}));
	}

	onAcademicProgramSelected(selectedAcademicProgram: string) {
		this.setState((state: SearchInstitutionState) => ({
			...state,
			selectedAcademicProgram,
		}));
	}

	onBtnSearchClicked() {
		const {
			selectedCity,
			selectedDegreeLevel,
			selectedAcademeicProgram,
		} = this.state;

		if (!selectedCity || !selectedDegreeLevel) {
			alert('Please select city and degree level both');
			return;
		}

		this.props.performSearch(
			selectedCity,
			selectedDegreeLevel,
			selectedAcademeicProgram
		);
	}

	render() {
		return (
			<div id="search-container">
				<div className="search-header">
					<h2>Find an Institution</h2>
				</div>

				<div className="search-body">
					<select
						className="search-select search-select--city"
						defaultValue="0"
						onChange={(event) =>
							this.onCitySelected(event.target.value)
						}
					>
						<option disabled value="0">
							Select a City
						</option>
						{this.state.cities.map((city) => (
							<option key={city} value={city}>
								{city}
							</option>
						))}
					</select>

					<select
						className="search-select search-select--degree-level"
						defaultValue="0"
						onChange={(event) =>
							this.onDegreeLevelSelected(event.target.value)
						}
						disabled={this.state.selectedCity === undefined}
					>
						<option disabled value="0">
							Select a Degree Level
						</option>
						{this.state.degreeLevels.map((degreeLevel) => (
							<option key={degreeLevel} value={degreeLevel}>
								{degreeLevel}
							</option>
						))}
					</select>

					<select
						className="search-select search-select--academic-program"
						defaultValue="0"
						onChange={(event) =>
							this.onAcademicProgramSelected(event.target.value)
						}
						disabled={this.state.selectedDegreeLevel === undefined}
					>
						<option disabled value="0">
							Select an Academic Program
						</option>
						{this.state.academicPrograms.map((academicProgram) => (
							<option
								key={academicProgram}
								value={academicProgram}
							>
								{academicProgram}
							</option>
						))}
					</select>
				</div>

				<div className="search-footer">
					<button
						className="btn btn--search"
						onClick={() => this.onBtnSearchClicked()}
					>
						Search Now
					</button>
				</div>
			</div>
		);
	}
}

export default SearchInstitution;
