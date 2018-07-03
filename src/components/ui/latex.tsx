import * as React from 'react'
import MathJax from 'react-mathjax2'
// import { spotColor } from '../../constants'

export default (props) =>
	<MathJax.Context
		input="tex"
		options={{
			displayAlign: "left",
			styles: {
				".MJXc-display": {
					margin: '0 !important'
				}
			}
		}}
	>
		<MathJax.Node inline={props.inline}>{props.children}</MathJax.Node>
	</MathJax.Context>