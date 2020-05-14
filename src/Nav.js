import React from 'react'
import{Link} from 'react-router-dom'

export default function Nav(){
    return<div>
        <nav className='nav'>
            <div className="main">
                <Link to ="/" className='links'>Cars Buy</Link>
            </div>
            <div className='link-wraps'>
                <Link to = '/cars' className='links'>Cars</Link>
                <Link to = '/login' className='loginlink'>Log In</Link>
            </div>
        </nav>
    </div>
}
