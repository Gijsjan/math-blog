import * as React from 'react'
import { H2, H4 } from '../../../ui/head'
import Def from '../../../ui/def'
import Example from '../../../ui/example'
import LaTex from '../../../ui/latex'
import Graph from '../../../ui/graph'
import Vector from '../../../ui/graph/vector'

export default () =>
	<>
		<H2>Matrix theory</H2>
		<Def of="matrix" href="https://en.wikipedia.org/wiki/Matrix_(mathematics)">
			A matrix is a rectangular array of number, symbols or expressions.
			<Example>
				<LaTex>
					{`
						\\begin{bmatrix}
						12 & 14 & 12 \\\\
						2 & 4 & 6 \\\\ 
						8 & 1 & 26 \\\\ 
						7 & 3 & -3 \\\\ 
						\\end{bmatrix}
					`}
				</LaTex>
			</Example>
		</Def>
		<Def of="row vector" href="https://en.wikipedia.org/wiki/Row_and_column_vectors">
			Matrix with 1 row, 1 x n.
			<LaTex>
				{`
					\\begin{bmatrix}
					x_{1} & x_{2} & \\dots & x_{n}
					\\end{bmatrix}
				`}
			</LaTex>
		</Def>
		<Def of="column vector" href="https://en.wikipedia.org/wiki/Row_and_column_vectors">
			Matrix with 1 column, n x 1.
			<LaTex>
				{`
					\\begin{bmatrix}
					x_{1}\\\\
					x_{2}\\\\
					\\vdots\\\\
					x_{n}
					\\end{bmatrix}
				`}
			</LaTex>
		</Def>
		<Def of="addition">
			<LaTex>
				{`
					\\begin{bmatrix}
					x_{1} & x_{2}\\\\
					y_{1} & y_{2}\\\\
					z_{1} & y_{2}
					\\end{bmatrix}
					+
					\\begin{bmatrix}
					a_{1} & a_{2}\\\\
					b_{1} & b_{2}\\\\
					c_{1} & c_{2}
					\\end{bmatrix}
					=
					\\begin{bmatrix}
					x_{1} + a_{1} & x_{2} + a_{2}\\\\
					y_{1} + b_{1} & y_{2} + b_{2}\\\\
					z_{1} + c_{1} & z_{2} + c_{2}
					\\end{bmatrix}
				`}
			</LaTex>
			<Example>
				<LaTex>
					{`
						\\begin{bmatrix}
						5 & 10\\\\
						7 & 2\\\\
						1 & 9 
						\\end{bmatrix}
						+
						\\begin{bmatrix}
						12 & 4\\\\
						19 & -8\\\\
						3 & 0 
						\\end{bmatrix}
						=
						\\begin{bmatrix}
						17 & 14\\\\
						26 & -6\\\\
						4 & 9
						\\end{bmatrix}
					`}
				</LaTex>
			</Example>
			<Example>
				<LaTex>
					{`
						\\begin{bmatrix}
						3\\\\
						2
						\\end{bmatrix}
						+
						\\begin{bmatrix}
						2\\\\
						4
						\\end{bmatrix}
						=
						\\begin{bmatrix}
						5\\\\
						6
						\\end{bmatrix}
					`}
				</LaTex>
				<Graph domain={[0, 4]} range={[0, 4]} width={200} height={200} ticks={5}>
					<Vector value={[3, 2]} label="a" color="blue" /> 
					<Vector value={[-2, 2]} x0={3} y0={2} label="b" color="red" /> 
					<Vector value={[1, 4]} label="a + b" color="green" /> 
				</Graph>
			</Example>
		</Def>
		<Def of="scalar multiplication">
			<LaTex>
				{`
					n \\times
					\\begin{bmatrix}
					x_{1} & x_{2}\\\\
					y_{1} & y_{2}\\\\
					z_{1} & z_{2}
					\\end{bmatrix}
					=
					\\begin{bmatrix}
					n \\times x_{1} & n \\times x_{2}\\\\
					n \\times y_{1} & n \\times y_{2}\\\\
					n \\times z_{1} & n \\times z_{2}
					\\end{bmatrix}
				`}
			</LaTex>
			<Example>
				<LaTex>
					{`
						3 \\times
						\\begin{bmatrix}
						1 & -2\\\\
						6 & 11\\\\
						-4 & 0 
						\\end{bmatrix}
						=
						\\begin{bmatrix}
						3 & -6\\\\
						18 & 33\\\\
						-12 & 0
						\\end{bmatrix}
					`}
				</LaTex>
			</Example>
		</Def>
		<Def of="multiplication" href="https://en.wikipedia.org/wiki/Matrix_multiplication">
 			If A is an n × m (4 × 2) matrix and B is an m × p (2 × 3) matrix,
			 their matrix product AB is an n × p (4 × 3) matrix.
			<table>
				<tbody>
				<tr>
					<td></td>
					<td>
						<LaTex>
							{`
								\\begin{bmatrix}
								b1 & b2 & b3\\\\
								b4 & b5 & b6\\\\
								\\end{bmatrix}
							`}
						</LaTex>
					</td>
				</tr>
				<tr>
					<td>
						<LaTex>
							{`
								\\begin{bmatrix}
								a1 & a5\\\\
								a2 & a6\\\\
								a3 & a7\\\\
								a4 & a8
								\\end{bmatrix}
							`}
						</LaTex>
					</td>
					<td>
						<LaTex>
							{`
								\\begin{bmatrix}
								c1 & c5 & c9\\\\
								c2 & c6 & c10\\\\
								c3 & c7 & c11\\\\
								c4 & c8 & c12\\\\
								\\end{bmatrix}\\\\
							`}
						</LaTex>
					</td>
				</tr>
				</tbody>
			</table>
			<LaTex>
				{`
					c1 = a1 \\times b1 + a5 \\times b4\\\\
					c2 = a2 \\times b1 + a6 \\times b4\\\\
					\\dots\\\\
					c12 = a4 \\times b3 + a8 \\times b6
				`}
			</LaTex>
			<H4>Properties</H4>
			<ul>
				<li>
					Non-commutativity
					<LaTex>{`AB \\neq BA`}</LaTex>
				</li>
				<li>
					Distributivity
					<LaTex>{`A(B + C) = AB + AC`}</LaTex>
				</li>
				<li>
					Associativity
					<LaTex>{`(AB)C = A(BC)`}</LaTex>
				</li>
			</ul>
		</Def>
	</>