import * as React from 'react'
import { H2 } from '../../../ui/head'
import Def from '../../../ui/def'
import Legend, { Var } from '../../../ui/legend'
import Graph from '../../../ui/graph'
import Vector from '../../../ui/graph/vector'
import LaTex from '../../../ui/latex'
import Example from '../../../ui/example'
import List from '../../../ui/list'

export default () =>
	<>
		<H2>Subspace, span &amp; basis</H2>
		<Def of="linear combination">
			<LaTex>
				{`a_{1}\\vec{v}_{1} + a_{2}\\vec{v}_{2} + \\dots + a_{n}\\vec{v}_{n}`}
			</LaTex>	
			<Legend>
				<Var of={`a`}>scalar</Var>
				<Var of={`v`}>vector</Var>
			</Legend>
		</Def>
		<Def of="span">
			The set of linear combinations of vectors <LaTex inline>{`\\vec{1}, \\vec{2}, \\dots, \\vec{n}`}</LaTex>.
		</Def>
		<Def of="linearly dependent">
			A set of vectors is said to be linearly dependent if one of the vectors in the set can be defined as a linear combination of the others.
			<Example>
				Are <LaTex>{`
					A = \\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}
					B = \\begin{bmatrix}-3\\\\1\\\\-2\\end{bmatrix}
					C = \\begin{bmatrix}2\\\\-1\\\\1\\end{bmatrix}
				`}</LaTex> linearly dependent?<br />
				Yes, because <LaTex inline>{`-A - C = B`}</LaTex>, so B can be expressed by A and B and therefor is dependent.
				<LaTex>{`
					\\begin{bmatrix}-1\\\\0\\\\-1\\end{bmatrix} - 
					\\begin{bmatrix}2\\\\-1\\\\1\\end{bmatrix} = 
					\\begin{bmatrix}-1 - 2\\\\0 - -1\\\\-1 - 1\\end{bmatrix} = 
					\\begin{bmatrix}-3\\\\1\\\\-2\\end{bmatrix}
				`}</LaTex>
			</Example>
			<Example>
				<Graph domain={[-8, 8]} range={[-8, 8]}>
					<Vector value={[4, 6]} color="red" label="v2" />
					<Vector value={[-4, -6]} color="red" label="v4" />
					<Vector value={[-2, -3]} color="blue" label="v3" />
					<Vector value={[2, 3]} color="blue" label="v1" />
				</Graph>
				<Legend>
					<Var of={`\\vec{v}_{1}`}>{`\\begin{bmatrix}2\\\\3\\end{bmatrix}`}</Var>
					<Var of={`\\vec{v}_{2}`}>{`2 \\times \\begin{bmatrix}2\\\\3\\end{bmatrix}`}</Var>
					<Var of={`\\vec{v}_{3}`}>{`-1 \\times \\begin{bmatrix}2\\\\3\\end{bmatrix}`}</Var>
					<Var of={`\\vec{v}_{4}`}>{`-2 \\times \\begin{bmatrix}2\\\\3\\end{bmatrix}`}</Var>
					<Var of={`span(\\vec{v}_{1}, \\vec{v}_{2}, \\vec{v}_{3}, \\vec{v}_{4})`}>{`= span(\\vec{v}_{1}) = \\begin{Bmatrix}\\begin{bmatrix}2\\\\3\\end{bmatrix}\\end{Bmatrix}`}</Var>
				</Legend>
			</Example>
		</Def>
		<Def of="linearly independent">
			When vectors span <LaTex inline>{`\\mathbb{R}^{2}`}</LaTex>, some combinations of the vectors
			take up all the space in <LaTex inline>{`\\mathbb{R}^{2}`}</LaTex>.<br />
			When vectors span <LaTex inline>{`\\mathbb{R}^{3}`}</LaTex>, some combinations of the vectors
			take up all the space in <LaTex inline>{`\\mathbb{R}^{3}`}</LaTex>.<br />
			<Example>
				<Graph domain={[-8, 8]} range={[-8, 8]}>
					<Vector value={[-1, 3]} color="red" label="v2" />
					<Vector value={[2, -6]} color="red" label="v4" />
					<Vector value={[-2, -3]} color="blue" label="v3" />
					<Vector value={[2, 3]} color="blue" label="v1" />
				</Graph>
				<Legend>
					<Var of={`\\vec{v}_{1}`}>{`\\begin{bmatrix}2\\\\3\\end{bmatrix}`}</Var>
					<Var of={`\\vec{v}_{2}`}>{`\\begin{bmatrix}-1\\\\3\\end{bmatrix}`}</Var>
					<Var of={`\\vec{v}_{3}`}>{`-1 \\times \\begin{bmatrix}2\\\\-3\\end{bmatrix}`}</Var>
					<Var of={`\\vec{v}_{4}`}>{`-2 \\times \\begin{bmatrix}-1\\\\3\\end{bmatrix}`}</Var>
					<Var of={`span(\\vec{v}_{1}, \\vec{v}_{2}, \\vec{v}_{3}, \\vec{v}_{4})`}>{`= span(\\vec{v}_{1}, \\vec{v}_{2}) = \\begin{Bmatrix}\\mathbb{R}^{2}\\end{Bmatrix}`}</Var>
				</Legend>
			</Example>
		</Def>
		<Def of="subspace">
			<List>
				<li>
					The zero vector <LaTex inline>{`\\vec{0}`}</LaTex> is in V
				</li>
				<li>
					closure under scalar multiplication
					<LaTex>{`\\vec{v} \\in V = k \\times \\vec{v} \\in V`}</LaTex>
					<Legend>
						<Var of={`\\vec{v}`}>vector</Var>
						<Var of={`V`}>{`\\text{subset of }\\mathbb{R}^n`}</Var>
						<Var of={`k`}>scalar</Var>
					</Legend>
				</li>
				<li>
					closure under addition
					<LaTex>{`\\vec{v} \\in V \\text{and }\\vec{w} \\in V, \\text{than }\\vec{v} + \\vec{w} \\in V`}</LaTex>
				</li>
			</List>
		</Def>
		<Def of="basis">
			Minimum set of vectors (linearly independent) that spans the subspace.
		</Def>
	</>