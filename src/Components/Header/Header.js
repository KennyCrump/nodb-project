import React, {Component} from 'react'
import './Header.css'

import Image from './Image'
import iconViral from '../images/goingViral.png'
import goingViral from '../images/imageViral.jpg'


class Header extends Component{
    render(){
        return (
            <div className="header">
                <Image imageClassName="goingViral" source={goingViral}/>
               <div className="title"> 
                   <h1>Want To Go Viral?</h1>
                    <h3>Share your video here and reach the world</h3>
                </div>
                <Image imageClassName="iconViral" source={iconViral}/>
                {/* <img src={iconViral} alt="broken"/> */}

            </div>
        )
    }
}

export default Header