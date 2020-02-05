import React, { Component } from 'react'
import './Navbar.css';


class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div id='Navbar'>
                <div id='logo' className='elem'>Logo</div>
                <div id='title' className='elem'>Title</div>
                <div id='drawer' className='elem'> Drawer</div>
            </div>
        )
    }
}

export default Navbar
