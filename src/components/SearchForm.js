import React, { Fragment } from 'react';

const SearchForm = ({ handleSubmit }) => (
	<Fragment>
		<form onSubmit={handleSubmit}>
			<input aria-label='search' type='text' name='search' placeholder='Keyword...' required='required' />
			<button>Search</button>
		</form>
	</Fragment>
);
export default SearchForm;
