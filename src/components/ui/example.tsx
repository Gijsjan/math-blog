import * as React from 'react'
import { spotColor } from '../../constants'
import styled from 'react-emotion'

const Div = styled<State, 'div'>('div')`
	border-left: 3px solid ${props => props.active ? `${spotColor}` : 'white' };
	color: #666;
	margin: ${props => props.active ? '2em 2em' : '1em 0'};
	padding: 0 ${props => props.active ? '1em' : 0};
	position: relative;
`

const Button = styled('button')`
	background: none;
	border: none;
	color: #BBB;
	cursor: pointer;
	margin: 0;
	outline: none;
	padding: 0;
`

const Close = styled(Button)`
	position: absolute;
	left: -1.5em;

	&:hover {
		color: #666;
	}
`

interface State {
	active: boolean
}
export default class Example extends React.PureComponent<any, State> {
	state: State = {
		active: false
	}

	render() {
		return (
			<Div active={this.state.active}>
				{
					this.state.active ?
						<>
							<Close
								onClick={this.toggleExample}
								title="Hide example"
							>
								x
							</Close>
							{ this.props.children }
						</> :
						<Button
							onClick={this.toggleExample}
							title="Show example"
						>
							Example
						</Button>
				}
			</Div>
		)
	}
	
	private toggleExample = () => this.setState({ active: !this.state.active })
}