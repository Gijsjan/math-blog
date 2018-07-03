import * as React from 'react'
import styled from 'react-emotion';
import LaTex from './latex'

const Grid = styled('div')`
	display: grid;
	grid-template-columns: max-content auto;
	margin-left: 1em;
`

const Label = styled(`span`)`
	color: black;
	justify-self: right;
	padding-right: 1em
`

const Description = styled(`span`)`
	color: #AAA;
`

export const Var = (props) =>
	<>
		<Label>
			<LaTex inline>{props.of}</LaTex>
		</Label>
		<Description>
			<LaTex inline>{props.children}</LaTex>
		</Description>
	</>

export default (props) =>
	<Grid>{props.children}</Grid>