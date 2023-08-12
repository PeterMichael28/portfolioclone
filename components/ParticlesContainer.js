import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




const ParticlesContainer = () => {
  const particlesInit = useCallback( async ( engine ) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback( async (  ) => {
    // await loadFull(engine)
  }, [])


  return (
    <Particles className="w-full h-full absolute translate-z-0 top-0" id="tsparticles" init={ particlesInit } loaded={ particlesLoaded } options={ {
      fullScreen: {enable: false},
      background: {
        color: {
          value: '',
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 90
          },
          repulse: {
            distance: 20,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value:'#e68e2e',
        },
        links: {
          color: '#f5d393',
          distance: 10,
          enable: true,
          opacity: 0.5,
          width:1
        },
        collisions: {
          enable: true,
          mode: "bounce"
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: "bounce"
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 8000,

          },
          value: 80
        },
        opacity: {
          value: 0.5,

        },
        shape: {
          type: 'circle'
        },
        size: {
          value: {min:10, max:60}
        }
      },
      detectRetina: true
    }}/>
    
    
  );
};

export default ParticlesContainer;
