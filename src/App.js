import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import Loading from './Loading';

class App extends Component {
	state = {
		results: [],
		err: false,
		isLoading: true
	};
	render() {
		if (this.props.isLoading) return <Loading />;
		else
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
										<SearchResults
											err={this.state.err}
											results={this.state.results}
											isLoading={this.state.isLoading}
										/>
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
						err: true,
						isLoading: false
					});
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export default App;
