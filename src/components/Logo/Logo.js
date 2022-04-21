import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilty className="tilty" glare scale={1.05} maxGlare={0.5} style={{ height: 150, width: 150 }}>
                <div className="Tilt-inner pa3">
                    <img alt="logo" style={{paddingTop:"5px"}}src={brain}/>
                </div>
            </Tilty>
        </div>)
}

export default Logo;