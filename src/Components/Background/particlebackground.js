import React from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './particle-config'

const particlebackground = () => {
    return (
        <>
        <div style={{ position: 'absolute'}}>
            <Particles height="350vh" width="350vw" options={particlesConfig}>

            </Particles>
          </div>  
        </>
    )
}

export default particlebackground
