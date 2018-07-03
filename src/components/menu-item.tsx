import React = require('react')
import { css } from 'emotion'
import { NavLink, Route } from 'react-router-dom'
import { spotColor, fontColor } from '../constants'

const defaultCss = css`
	border-left: 12px solid white;
	color: ${fontColor};
	display: block;
	font-family: sans-serif;
	font-size: 1.2em;
	padding: 1em;
	text-decoration: none;
`

const activeCss = css`
	border-left: 12px solid ${spotColor};
	color: ${spotColor};

	& + ul li a {
		border-color: white;
	}
`

interface Props {
	path: string
	label: string
	subMenu?: React.ComponentType<any>
}
export default (props: Props) => 
		<li>
			<NavLink
				activeClassName={activeCss}
				className={defaultCss}
				to={props.path}
			>
				{props.label}
			</NavLink>
			{
				props.subMenu &&
				<Route path={props.path} component={props.subMenu} />
			}
		</li>
