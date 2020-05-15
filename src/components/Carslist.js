import React,{useState} from 'react'

export default function Cars(props){
    console.log(props)
    let{car_id,make,model,img} =props.cars
    const [price, newprice] = useState(props.cars.price)
    const [mileage, newmileage] = useState(props.cars.mileage)
    return<div className='cars'>
        <img className='img' src={img} alt="cars pics"/>
        <span>make:{make}</span>
        <span>model:{model}</span>
        <span>price:${props.cars.price}</span>
        <span>mileage:{props.cars.mileage}</span>
        <p>
        <input name='price' placeholder='newprice' onChange={(event)=>{
            newprice(event.target.value)
        }}/>
        <input name='mileage' placeholder='newmileage' onChange={(event)=>{
            newmileage(event.target.value)
        }}/>
        <button onClick={()=>props.updateCar(car_id,price,mileage)}>Update</button>
        {/* <button onClick={()=>props.updateCar(car_id,mileage)}>Update mileage</button> */}
        <button onClick={()=>props.deleteCar(car_id)}>Delete</button>
        </p>
        </div>
}