import * as React from 'react'
import MenuItem from '../menu-item'
import LinearAlgebraMenu from './linear-algebra/menu'

export default () =>
	<ul>
		<MenuItem path="/structure/linear-algebra" label="Linear algebra" subMenu={LinearAlgebraMenu} />
	</ul>