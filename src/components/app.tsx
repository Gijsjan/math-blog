import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import StructureMenu from './structure/menu'
import MenuItem from './menu-item'
import Quantity from './quantity'
import Structure from './structure'
import VectorSpaces from './structure/linear-algebra/vector-spaces'
import SubspaceSpanBasis from './structure/linear-algebra/subspace-span-basis'
import MatrixTheory from './structure/linear-algebra/matrix-theory'
import { css } from 'emotion'
import { H1 } from './ui/head';

const UlClassName = css`
	ul {
		margin-left: 1em;
	}
`

interface State {

}
export default class App extends React.PureComponent<null, State> {
	render() {
		return (
			<BrowserRouter>
				<>
					<H1>Math notes</H1>
					<ul className={UlClassName}>
						<MenuItem path="/quantity" label="Quantity" />
						<MenuItem path="/structure" label="Structure" subMenu={StructureMenu} />
						<MenuItem path="/space" label="Space" />
						<MenuItem path="/change" label="Change" />
					</ul>
					<div style={{ paddingRight: '2em' }}>
						<Route path="/quantity" component={Quantity} />
						<Route path="/structure" component={Structure} />
						<Route path="/structure/linear-algebra/vector-spaces" component={VectorSpaces} />
						<Route path="/structure/linear-algebra/subspace-span-basis" component={SubspaceSpanBasis} />
						<Route path="/structure/linear-algebra/matrix-theory" component={MatrixTheory} />
					</div>
				</>
			</BrowserRouter>
		)
	}
}
