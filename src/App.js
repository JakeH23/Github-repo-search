import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

class App extends Component {
	state = {
		results: [],
		err: false
	};
	render() {
		const { err, results } = this.state;
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
									<SearchResults err={err} results={results} />
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
		await (await fetch(`https://api.github.com/search/repositories?q=${repoName}in:name`))
			.json()
			.then(({ items }) => {
				if (items.length > 0) {
					this.setState({
						results: items,
						err: false
					});
				} else {
					this.setState({
						err: true
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export default App;
