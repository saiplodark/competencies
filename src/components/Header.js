import React from 'react'
import {connect} from 'react-redux'
import{getBuyerSession} from '../redux/buyerReducer'
import Nav from '../Nav'
import routes from '../routes'
import{Link} from 'react-router-dom'


class Header extends React.Component{

    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            toggleSideBar:false
        }
    }

    toggleSideBarFunc(){
        this.setState((prevState)=>{
            return{
                toggleSideBar: !prevState.toggleSideBar
            }
        })
    }

    componentDidMount(){
        this.props.getBuyerSession()
    }
    render(){
        console.log("HEADER props: ", this.props)

        return <div className='header'>
            {/* <button className='menu' onClick={()=>this.toggleSideBarFunc()}>Menu</button>
                    <nav className={this.state.toggleSideBar? "show":"hide"}>
                    <div className="main">
                <Link to ="/" className='links'>Cars Buy</Link>
            </div>
            <div className='link-wraps'>
                <Link to = '/cars' className='links'>Cars</Link>
                <Link to = '/login' className='loginlink'>Log In</Link>
            </div>
                    </nav> */}
            {
                (this.props.loading)
                ?
                <div>Loading...</div>
                :<div>Welcome, {this.props.buyer.username}!</div>
            }
                    <Nav/>
                    {routes}
                </div>
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {getBuyerSession}

export default connect(mapStateToProps,mapDispatchToProps)(Header)