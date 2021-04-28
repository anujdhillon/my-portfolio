import React from "react";
import Particles from "react-particles-js";

export default function ParticleBackground({particlesConfig}){
    return (
        <Particles params = {particlesConfig}></Particles>
    )
}