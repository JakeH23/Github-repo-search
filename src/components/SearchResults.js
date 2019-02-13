import React, { Fragment } from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';

const SearchResults = (props) => {
	return (
		<Fragment>
			{props.results.map((repo) => (
				<ul key={repo.id}>
					<Popup
						trigger={
							<button type='button' className='btn btn-primary btn-lg btn-block'>
								<li>{repo.name}</li>
							</button>
						}
						modal
						closeOnDocumentClick
					>
						<div>
							<p>
								<span className='modal_title'>{repo.name}</span> by{' '}
								<span className='modal_title'>{repo.owner.login}</span>
							</p>
							<p>
								<span className='modal_title'>URL: </span>
								<a href={`${repo.html_url}`}>{repo.html_url}</a>
							</p>
							<p>
								<span className='modal_title'>Description:</span> {repo.description}
							</p>
							<p>
								<span className='modal_title'>Fork Count:</span> {repo.forks_count}
							</p>
							<p>
								<span className='modal_title'>Open Issues:</span> {repo.open_issues_count}
							</p>
							<p>
								<span className='modal_title'>Last updated: </span>
								{moment(repo.updated_at).startOf('second').fromNow()}
							</p>
						</div>
					</Popup>
				</ul>
			))}
			{props.err && <p>{props.err}</p>}
		</Fragment>
	);
};

export default SearchResults;
