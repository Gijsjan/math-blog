import * as React from 'react'
import * as d3 from 'd3'
import { css } from 'emotion'

export interface Coordinate {
	x: number
	y: number
}
type Pixel = number
export interface Point {
	x: Pixel
	y: Pixel
}

const className = css`
	.grid line {
		stroke: lightgray;
	}

	.grid path, .grid text {
		display: none
	}
`

interface Props {
	domain?: [number, number]
	height?: number
	padding?: number
	range?: [number, number]
	ticks?: number
	width?: number
}
interface State {
	svg: d3.Selection<d3.BaseType, {}, null, undefined>
}
export default class Graph extends React.PureComponent<Props, State> {
	state: State = {
		svg: null
	}

	static defaultProps: Props = {
		domain: [0, 10],
		height: 500,
		padding: 20,
		range: [0, 12],
		ticks: 10,
		width: 500,
	}

	private init = (node) => {
		if (node == null || this.state.svg != null) return

		const svg = d3
			.select(node)
			.append('svg')
			.attr('width', this.props.width).attr('height', this.props.height)

		const xScale = () => d3
			.scaleLinear()
			.domain(this.props.domain)
			.range([this.props.padding, this.props.width - this.props.padding])

		const yScale = () => d3
			.scaleLinear()
			.domain(this.props.range)
			.range([this.props.height - this.props.padding, this.props.padding])

		const xAxis = () => d3
			.axisBottom(xScale())
			.ticks(this.props.ticks)

		const yAxis = () => d3
			.axisLeft(yScale())
			.ticks(this.props.ticks)

		// Draw x grid lines
		svg
			.append('g')
			.attr('class', 'grid')
			.attr("transform", `translate(0, ${this.props.padding})`)
			.call(
				xAxis()
					.tickSize(this.props.height - 2 * this.props.padding)
					.tickFormat(d3.format(''))
			)

		// Draw y grid lines
		svg
			.append('g')
			.attr('class', 'grid grid-y')
			.attr("transform", `translate(${this.props.width - this.props.padding}, 0)`)
			.call(
				yAxis()
					.tickSize(this.props.width - 2 * this.props.padding)
					.tickFormat(d3.format(''))
			)

		const zero = this.coordinateToPoint(0, 0)
		svg
			.append('g')
			.attr("transform", `translate(0, ${zero.y})`)
			.call(xAxis())

		svg
			.append('g')
			.attr("transform", `translate(${zero.x}, 0)`)
			.call(yAxis())

		// Remove the 0 'ticks'
		svg.selectAll(".tick")
			.filter(function (d) { return d === 0})
			.remove()

		this.setState({ svg })
	}

	render() {
		return (
			<div
				className={className}
				ref={this.init}
			>
				{
					this.state.svg &&
					React.Children.map(this.props.children, (child: React.ReactElement<any>) =>
						React.cloneElement(child, {
							coordinateToPoint: this.coordinateToPoint.bind(this),
							svg: this.state.svg
						})
					)
				}
			</div>
		)
	}


	private coordinateToPoint(coordinate: Coordinate): Point;
	private coordinateToPoint(coordinate: number, y: number): Point;
	private coordinateToPoint(coordinate, y?) {
		if (typeof coordinate === 'number') {
			coordinate = { x: coordinate, y }
		}

		const [domainMin, domainMax] = this.props.domain
		const [rangeMin, rangeMax] = this.props.range

		const heightTranslation = rangeMin < 0 && rangeMax > 0 ?
			Math.abs(rangeMin) / (Math.abs(rangeMin) + rangeMax) : 0

		const widthTranslation = domainMin < 0 && domainMax > 0 ?
			Math.abs(domainMin) / (Math.abs(domainMin) + domainMax) : 0

		const zeroPoint = {
			y: (this.props.height - this.props.padding) - (this.props.height - this.props.padding * 2) * heightTranslation,
			x: this.props.padding + (this.props.width - this.props.padding * 2) * widthTranslation
		}

		const distanceBetweenXThicks = (this.props.width - (this.props.padding * 2)) / (domainMax - domainMin)
		const distanceBetweenYThicks = (this.props.height - (this.props.padding * 2)) / (rangeMax - rangeMin)

		return ({
			x: zeroPoint.x + distanceBetweenXThicks * coordinate.x,
			y: zeroPoint.y - distanceBetweenYThicks * coordinate.y,
		})
	} 
}