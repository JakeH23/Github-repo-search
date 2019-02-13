import React from 'react';

const SearchForm = (props) => (
	<form onSubmit={props.getInfo}>
		<input type='text' name='search' placeholder='Keyword...' />
		<button>Search Repositories</button>
	</form>
);
export default SearchForm;
