import React, { Component, Fragment } from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';
import Loading from './Loading';

const contentStyle = {
	width: '70%',
	paddingTop: '20px',
	borderRadius: '10px',
	backgroundColor: '#dbdbdb'
};

class SearchResults extends Component {
	render() {
		const { err, results, loading } = this.props;
		if (loading) return <Loading />;
		else
			return (
				<Fragment>
					{err && (
						<p className='error'>There are no repositories matching this keyword, please search again</p>
					)}
					{results.map(
						({ id, name, owner, html_url, description, forks_count, open_issues_count, updated_at }) => (
							<ul key={id}>
								<Popup
									trigger={
										<button type='button' className='btn btn-primary btn-lg btn-block'>
											<li>
												{name} by {owner.login}
											</li>
										</button>
									}
									modal
									contentStyle={contentStyle}
									closeOnDocumentClick
								>
									<div>
										<p>
											<span className='modal_title'>{name}</span> by{' '}
											<span className='modal_title'>{owner.login}</span>
										</p>
										<p>
											<span className='modal_title'>Link to repo: </span>
											<a href={`${html_url}`}>{name}</a>
										</p>
										<p>
											<span className='modal_title'>Description:</span> {description}
										</p>
										<p>
											<span className='modal_title'>Fork Count:</span> {forks_count}
										</p>
										<p>
											<span className='modal_title'>Open Issues:</span> {open_issues_count}
										</p>
										<p>
											<span className='modal_title'>Last updated: </span>
											{moment(updated_at).startOf('second').fromNow()}
										</p>
									</div>
								</Popup>
							</ul>
						)
					)}
				</Fragment>
			);
	}
}

export default SearchResults;
