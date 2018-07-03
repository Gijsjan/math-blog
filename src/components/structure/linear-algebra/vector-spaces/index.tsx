import * as React from 'react'
import { H2, H4 } from '../../../ui/head'
import LaTex from '../../../ui/latex'
import Def from '../../../ui/def'
import List from '../../../ui/list'
import Example from '../../../ui/example';

export default () =>
	<>
		<H2>Vector spaces</H2>
		<Def of="dot product">
			<LaTex>
				{`
					\\vec{a} \\cdot \\vec{b} =
					\\begin{bmatrix}
					a_{1}\\\\
					\\vdots\\\\
					a_{n}
					\\end{bmatrix}
					\\cdot
					\\begin{bmatrix}
					b_{1}\\\\
					\\vdots\\\\
					b_{n}
					\\end{bmatrix}
					=
					a_{1} \\cdot b_{1} +
					\\dots +
					a_{n} \\cdot b_{n}
					=
					\\sum\\limits_{i=1}^n a_{i}b_{i}
				`}
			</LaTex>
			<Example>
				<LaTex>
					{`
						\\vec{a} \\cdot \\vec{b} =
						\\begin{bmatrix}
						1\\\\
						2\\\\
						3
						\\end{bmatrix}
						\\cdot
						\\begin{bmatrix}
						4\\\\
						5\\\\
						6
						\\end{bmatrix}
						=
						1 \\times 4 +
						2 \\times 5 +
						3 \\times 6
						=
						32
					`}
				</LaTex>
			</Example>
			<H4>Properties</H4>
			<List>
				<li>commutative</li>
				<li>distributive over vector addition</li>
				<li>associative over vector multiplication</li>
			</List>
		</Def>
		<Def of="vector length">
			<LaTex>
				{`|\\vec{v}|^2 = \\vec{v} \\cdot \\vec{v}`}
			</LaTex>
			or
			<LaTex>
				{`|\\vec{v}| = \\sqrt{\\vec{v} \\cdot \\vec{v}}`}
			</LaTex>
		</Def>
		<Def of="vector projection">
			The projection from <LaTex inline>{`\\vec{x}`}</LaTex> onto <LaTex inline>{`\\vec{v}`}</LaTex> is:
			<LaTex>
				{`Proj_{x} = \\frac{\\vec{x}\\cdot\\vec{v}}{\\vec{v}\\cdot\\vec{v}} \\cdot \\vec{v}`}
			</LaTex>
		</Def>
	</>