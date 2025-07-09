import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0d1117",
        },
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 2,
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
        },
      }}
    />
  );
};

export default AnimatedBackground;
