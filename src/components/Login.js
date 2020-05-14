import React from 'react'
import axios from 'axios'
import{Redirect} from 'react-router-dom'


export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            registerMode: false,
            redirect: false
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

    toggleRegisterMode(){
        this.setState({
            registerMode: !this.state.registerMode
        })
    }

    changeHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    async login(){
        const {username, password} = this.state
        const buyer = await axios.post('/auth/login', {username, password})
        console.log("from login: ", buyer.data)
        this.setState({redirect:true})
        }
    

    async register(){
        const {password, username} = this.state
        const buyer= await axios.post('/auth/register', {username, password})
        console.log("from register: ", buyer.data)
        this.setState({redirect:true})
    }

    render(){
        if(this.state.redirect){
            return <Redirect to="/"/>
        }
        return <div className='auth'>
            {
                (this.state.registerMode)
                ?
                <div className="login">
                    <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.changeHandler(e)}/>
                    <button onClick={this.login}>Login</button>
                </div>
                :
                <div className="register">
                    <input placeholder="Username" type="text" name="username" value={this.state.username} onChange={ e => this.changeHandler(e)}/>
                    <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={ e => this.changeHandler(e)}/>
                    <button onClick={this.register}>Register</button>
                    <button onClick={() => this.toggleRegisterMode()}>Member signin</button>
                </div>
            }
        </div>
    }
}