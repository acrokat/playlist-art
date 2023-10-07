import React from 'react';
import ReactDOM from 'react-dom';
import URLInput from './components/URLInput';

const App = () => {
  return (
	<div>
		<h1>Hey homies!</h1>
		<URLInput />
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
