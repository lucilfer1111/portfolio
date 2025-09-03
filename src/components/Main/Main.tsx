import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadImageShape } from "@tsparticles/shape-image";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import python from "../../assets/python.svg";
import java from "../../assets/java.svg";
import flutter from "../../assets/flutter.svg";
import golang from "../../assets/golang.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import firebase from "../../assets/firebase.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";

export function Main() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadImageShape(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    detectRetina: true,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 2,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 2,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        blink: false,
        color: "#000",
        consent: false,
        distance: 150,
        enable: false,
        opacity: 0.4,
        width: 1,
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        bounce: false,
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        limit: 20,
        value: 15,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.2,
          speed: 1,
          sync: false,
        },
        random: true,
        value: 1,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
        direction: "random",
        random: true,
        value: 0,
      },
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400",
        },
        options: {
          images: [
            {
              src: flutter,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: cssIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: firebase,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: golang,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: htmlIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: jsIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: mysqlIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: python,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: java,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: reactIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: sassIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: typescriptIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
            {
              src: vueIcon,
              width: 20,
              height: 20,
              replaceColor: false,
            },
          ],
        },
        polygon: {
          sides: 5,
        },
        stroke: {
          color: "#000000",
          width: 0,
        },
        type: "images",
      },
      size: {
        animation: {
          enable: false,
          minimumValue: 0.1,
          speed: 40,
          sync: false,
        },
        random: false,
        value: 16,
      },
    },
    polygon: {
      draw: {
        enable: false,
        lineColor: "#ffffff",
        lineWidth: 0.5,
      },
      move: {
        radius: 10,
      },
      scale: 1,
      url: "",
    },
    background: {
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
  }), []);

  if (init) {
    return (
      <Container>
        <Particles id="tsparticles" options={particlesOptions} />
        <Hero />
        <About />
        <Project />
        <Contact />
      </Container>
    );
  }

  return <Container><Hero /><About /><Project /><Contact /></Container>; 
}