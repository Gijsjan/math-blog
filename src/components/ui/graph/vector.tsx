import { Coordinate, Point } from "./index"

const rotateCounterClockwise = (coordinate: Coordinate, rad: number) => (
	{
		x: coordinate.x * Math.cos(rad) - coordinate.y * Math.sin(rad),
		y: coordinate.x * Math.sin(rad) + coordinate.y * Math.cos(rad),
	}
)

const rotateClockwise = (coordinate: Coordinate, rad: number) => (
	{
		x: coordinate.x * Math.cos(rad) + coordinate.y * Math.sin(rad),
		y: coordinate.x * -Math.sin(rad) + coordinate.y * Math.cos(rad),
	}
)

const tipCoordinate  = (coordinate: Coordinate) => {
	const length = Math.sqrt(coordinate.x * coordinate.x + coordinate.y * coordinate.y)

	return ({
		x: coordinate.x - (coordinate.x / length) / 4,
		y: coordinate.y - (coordinate.y / length) / 4,
	})
}

interface VectorProps {
	color?: string
	coordinateToPoint?: (coordinate: number | Coordinate, y?: number) => Point
	label?: string
	svg?: d3.Selection<any, {}, null, undefined>
	value: number[]
	x0?: number
	y0?: number
}
const Vector: React.SFC<VectorProps> = (props) => {
	if (props.value.length < 2) return null
	const x = props.x0 + props.value[0]
	const y = props.y0 + props.value[1]

	const arrowCoordinate: Coordinate = { x, y }
	const arrowPoint = props.coordinateToPoint(arrowCoordinate)
	const arrow = props.svg
		.append('g')
		.attr('class', 'arrow')
		.attr('stroke', props.color)
		.attr('fill', props.color)

	const startPoint = props.coordinateToPoint(props.x0 || 0, props.y0 || 0)
	arrow.append('line')
		.attr('x1', startPoint.x)
		.attr('y1', startPoint.y)
		.attr('x2', arrowPoint.x)
		.attr('y2', arrowPoint.y)
		.attr('stroke-width', 3)

	const leftTip = props.coordinateToPoint(rotateCounterClockwise(tipCoordinate(arrowCoordinate), Math.PI/128))
	const rightTip = props.coordinateToPoint(rotateClockwise(tipCoordinate(arrowCoordinate), Math.PI/128))
	arrow.append('polygon')
		.attr('points', `
			${arrowPoint.x},${arrowPoint.y}
			${leftTip.x},${leftTip.y}
			${rightTip.x},${rightTip.y}
		`)

	if (props.label) {
		arrow
			.append('text')
			.attr('x', 8 + startPoint.x + (arrowPoint.x - startPoint.x)/2)
			.attr('y', 8 + startPoint.y + (arrowPoint.y - startPoint.y)/2)
			.text(props.label)
			.attr('fill', props.color)
	}

	return null
}

Vector.defaultProps = {
	color: 'black',
	x0: 0,
	y0: 0,
}

export default Vector