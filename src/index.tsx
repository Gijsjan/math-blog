import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/app'

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('container')
	ReactDOM.render(<App />, container)
});
