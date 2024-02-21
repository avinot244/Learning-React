import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={() => handleCareClick(careType, scaleValue)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function handleCareClick(careType, scaleValue) {
	var care = ""
	var careTodo = ""
	if (scaleValue === 1) {
		care = "peu"
	}else if (scaleValue === 2) {
		care = "modérement"
	}else if (scaleValue === 3) {
		care = "beaucoup"
	}

	careType === 'light' ?
	(careTodo = "de lumière")
	:
	(careTodo = "d'arrosage")
	alert(`Cette plante requiert ${care} ${careTodo}`)
}
export default CareScale