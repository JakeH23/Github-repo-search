import React from 'react';

const Loading = () => (
	<div>
		<p className='loading_text'>Loading...</p>
		<div class='spinner-border text-light' role='status'>
			<span class='sr-only'>Loading...</span>
		</div>
	</div>
);

export default Loading;
