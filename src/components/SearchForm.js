import React, { Fragment } from 'react';

const SearchForm = ({ getInfo }) => (
	<Fragment>
		<form onSubmit={getInfo}>
			<input aria-label='search' type='text' name='search' placeholder='Keyword...' required='required' />
			<button>Search</button>
		</form>
	</Fragment>
);
export default SearchForm;
