import React, {Component} from 'react'
import axios from 'axios'
import { Redirect}from'react-router-dom'
import {connect} from 'react-redux'
import Carslist from './Carslist'
import Carsadder from './Carsadder'

class Cars extends Component{
    constructor(props){
        super(props)
        this.state={
            buyer:{},
            cars:[],
            redirect:false,
        }
    }
    componentDidMount(){
        console.log(this.props)
        this.getCars()
    }
    getCars=()=>{
        if(this.state.buyer){
            axios.get('/api/Cars')
            .then(({data})=>{
                this.setState({
                    cars:data
                })
            })
            .catch(err=>{
                console.log('can not find cars')
            })
        }else{
            return <Redirect to="/"/>
        }
    }
    addCars=(info)=>{
        const {make,model,price,mileage,img} = info
        const newCars = {make,model,price,mileage,img}
        axios.post('/api/addCars', newCars)
        .then(()=>{
            this.getCars()
        })
        .catch(err=>{
            console.log('failed to add car')
        })
    }

    updateCars=(id,price,mileage)=>{
        axios.put(`/api/editCars/${id}?price=${price}&mileage=${mileage}`)
        .then(()=>this.getCars())
        .catch(err=>{
            console.log('edit failed')
        })
    }

    deleteCars=(id)=>{
        axios.delete(`/api/deleteCars/${id}`)
        .then(()=>this.getCars())
        .catch(err=>{
            console.log('delete failed')
        })
    }

    render(){
        let{redirect} = this.state
        let{user} = this.props
        console.log(this.state.cars)
        const mappedcars = this.state.cars.map(cars=><Carslist
            key={cars.car_id}
            cars={cars}
            updateCar={this.updateCars}
            deleteCar={this.deleteCars}/>
            )
            return(
                <div className='carslists' >
                <span>
               {mappedcars}
                </span>
                <Carsadder addCars={this.addCars}/>
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Cars)
