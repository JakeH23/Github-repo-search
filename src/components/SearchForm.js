import React, { Fragment } from 'react';

const SearchForm = (props) => (
	<Fragment>
		<form onSubmit={props.getInfo}>
			<input type='text' name='search' placeholder='Keyword...' required='required' />
			<button>Search</button>
		</form>
	</Fragment>
);
export default SearchForm;
