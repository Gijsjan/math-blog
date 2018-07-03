import * as React from 'react'
import { H3 } from './head'
import styled from 'react-emotion'
import { inlineBlock } from '../../constants';

const h3Ratio = .3 

const Head = styled(H3)`
	${inlineBlock}
	font-weight: normal;
	width: ${h3Ratio * 100}%;

	a {
		display: none;
		margin-left: .5em;
	}

	&:hover {
		a {
			${inlineBlock}
		}
	}
`

const Div = styled('div')`
	${inlineBlock}
	margin-bottom: 3em;
	width: ${100 - (h3Ratio * 100)}%;
`

interface Props {
	children?: any
	of: string
	href?: string
}
export default (props: Props) =>
	<>
		<Head title={`definition of ${props.of}`}>
			{props.of}
			{
				props.href &&
				<a href={props.href}>
					<img
						alt={`external link to ${props.of} definition`}
						src="/assets/images/external-link.png"
						title={`external link to ${props.of} definition`}
					/>
				</a>
			}
		</Head>
		<Div>
			{props.children}
		</Div>
	</>
