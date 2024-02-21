import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} onclick={() => handleCareClick(water)}/>
				<CareScale careType='light' scaleValue={light} onclick={() => handleCareClick(light)}/>
			</div>
		</li>
	)
}

function handleCareClick(e){
	alert(e)
}


export default PlantItem