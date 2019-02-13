import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

class App extends Component {
	state = {
		results: []
	};
	render() {
		return (
			<div className='App'>
				<div className='wrapper'>
					<div className='main'>
						<div className='container'>
							<div className='row'>
								<div className='col-5 title-container'>
									<Header />
								</div>
								<div className='col-7 form-container'>
									<SearchForm getInfo={this.getInfo} />
									<SearchResults results={this.state.results} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	getInfo = async (event) => {
		event.preventDefault();
		const repoName = event.target.elements.search.value;
		const api_call = await fetch(`https://api.github.com/search/repositories?q=${repoName}in:name`);
		const data = await api_call.json();
		this.setState({
			results: data.items
		});
	};
}

export default App;
