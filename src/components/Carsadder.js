import React,{Component} from 'react'

class Carsadder extends Component{
    constructor(props){
        super(props)
        this.state={
            make:'',
            model:'',
            price:'',
            mileage:'',
            img:''
        }
        this.submitHandler=this.submitHandler.bind(this)
    }
   
  submitHandler(e){
        e.preventDefault()
        this.props.addCars(this.state)
    }

    changeHandler(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <span>
                    <label>make</label>
                    <input
                    type ="text"
                    name = "make"
                    value = {this.state.make}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "car make"/>
                </span>
                <span>
                    <label>model</label>
                    <input
                    type ="text"
                    name = "model"
                    value = {this.state.model}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "model"/>
                </span>
                <span>
                    <label>price</label>
                    <input
                    type ="number"
                    name = "price"
                    value = {this.state.price}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "price"/>
                </span>
                <span>
                    <label>mileage</label>
                    <input
                    type ="number"
                    name = "mileage"
                    value = {this.state.mileage}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "how far you drove"/>
                </span>
                <span>
                    <label>img</label>
                    <input
                    type ="text"
                    name = "img"
                    value = {this.state.img}
                    onChange = {(e)=> this.changeHandler(e)}
                    placeholder = "image"/>
                </span>
                <button >add</button>
                </form>
            </div>
        )
    }
}
export default Carsadder