import React, { Component } from "react";
import Particles from "react-tsparticles";

class Particle extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    /*console.log(main);*/

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    /*console.log(container);*/
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "none",
            },
          },
          fpsLimit: 70,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#D81A5B",
            },
            links: {
              color: "#D81A5B",
              distance: 160,
              enable: true,
              opacity: 0.7,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 400,
              },
              value: 20,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default Particle;