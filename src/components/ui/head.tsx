import styled from "react-emotion";

const family = 'font-family: sans-serif;'

export const H1 = styled('h1')`
	${family}
	align-self: center;
	margin-left: 25%;
	text-transform: uppercase;
`

export const H2 = styled('h2')`
	${family}
	margin: 0 0 2em 0;
`

export const H3 = styled('h3')`
	${family}
	color: teal;
	display: inline-block;
	font-family: sans-serif;
	text-transform: capitalize;
`

export const H4 = styled('h4')`
	${family}
	color: teal;
	font-weight: normal;
	margin: 2em 0 0 0;
`