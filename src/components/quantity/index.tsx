import * as React from 'react'
import { H2 } from '../ui/head'
import Def from '../ui/def'
import Example from '../ui/example'

export default () =>
	<>
		<H2>Quantity</H2>
		<Def of="natural numbers" href="https://en.wikipedia.org/wiki/Natural_number">
			All positive integers. In some defenitions zero is included, in others it is not.
			<Example>{`1, 2, 3, 4\\dots`}</Example>
		</Def>
		<Def of="integers" href="https://en.wikipedia.org/wiki/Integer">
			Whole numbers, negative and positive.
			Integers are all natural numbers plus negative numbers (and zero).
			<Example>{`\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots`}</Example>
		</Def>
		<Def of="rational numbers" href="https://en.wikipedia.org/wiki/Rational_number">
			Any number that can be expressed as fraction of 2 integers.
			Rational numbers are all integers plus fractions.
			<Example>
				{`\\dots, -1, -\\frac{1}{4}, 0, \\frac{1}{10}, \\frac{2}{10}, 1, 2, \\dots`}
			</Example>
		</Def>
		<Def of="irrational numbers" href="https://en.wikipedia.org/wiki/Irrational_number">
			Number where the decimals don't terminate.
			Irrational numbers are all real numbers which are not rational.
			<Example>
				{`\\pi, e, \\sqrt{2}, \\phi \\text{ (golden ratio)}`}
			</Example>	
		</Def>
		<Def of="real numbers" href="https://en.wikipedia.org/wiki/Real_number">
			A value that can represent a distance along a line.
			All rational and irrational numbers.
			<Example>
				{`\\dots, -3, -\\sqrt{2}, 0, \\frac{1}{4}, \\sqrt{2}, \\pi, \\dots`}
			</Example>	
		</Def>
		<Def of="commutative property" href="https://en.wikipedia.org/wiki/Commutative_property">
			Changing the order of the operands does not change the result.
			<Example>
				{`a + b = b + a\\\\
				a \\times b = b \\times a`}
			</Example>
		</Def>
		<Def of="associative property" href="https://en.wikipedia.org/wiki/Associative_property">
			Rearranging the parentheses in an expression containing two or more occurrences in a row
			of the same associative operator will not change its value.
			<Example>
				{`(a + b) + c = a + (b + c)\\\\
				(a \\times b) \\times c = a \\times (b \\times c)`}
			</Example>
		</Def>
	</>	