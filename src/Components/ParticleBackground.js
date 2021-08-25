import React from "react";
import Particles from "react-particles-js";

export default function ParticleBackground({ particlesConfig }) {
	return (
		<Particles
			style={{ position: "fixed", zIndex: "1" }}
			params={particlesConfig}
		></Particles>
	);
}
