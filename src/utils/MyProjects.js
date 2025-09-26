import wpmUrl from "../assets/images/fee-gen-img.png";
import bodfitUrl from "../assets/images/bodfit.png";
import embyUrl from "../assets/images/emby.jpg";
import bulbUrl from "../assets/images/bulb.png";
import farmulan from "../assets/images/farmulan.png";
import quizzler from "../assets/images/quizzler.png";

export const MyProjects = [
  {
    id: 1,
    tags: ["web", "all"],
    title: "WPM Fees Generator",
    imageUrl: wpmUrl,
    description:
      "The WPM Fee Generator is a custom bookkeeping software for Wolverine Property Management, automating fee calculations and data storage. It features Flask framework backend for secure processing and a React/Bootstrap frontend for easy file management and sheet generation.",
    extLink: "https://wpmfeegen.netlify.app/",
  },

  {
    id: 2,
    tags: ["mobile", "emb", "all"],
    title: "FarMulan",
    imageUrl: farmulan,
    description:
      "The Real-Time Smart Irrigation Scheduler is an IoT-driven system that automates crop-specific watering using ET₀ calculations, crop growth coefficients, soil-moisture sensors, and weather forecasts. I designed the full stack, including a custom PCB and NodeMCU firmware for sensor-actuated valves, a Firebase backend for schedule computation, and a Flutter mobile app with Hive for offline sync. Field tests on lettuce and tomato showed 10–35% yield gains, ~60% labor reduction, and 35–60% water savings.",
    extLink: "",
  },

  {
    id: 3,
    tags: ["web", "all"],
    title: "Quizzler",
    imageUrl: quizzler,
    description:
      "Quizzler is a React-based trivia web game that lets users choose categories and difficulty levels, with difficulty controlling the number of lives. It integrates the TriviaDB API to fetch randomized questions, manages complex game state for smooth play, and provides scoring, timers, and end-of-game summaries. The app also supports accessibility, responsive design, and persistent high scores for replayability.",
    extLink: "https://dkokonkwo.github.io/quizzler/",
  },

  {
    id: 4,
    tags: ["mobile", "all"],
    title: "Bodfit",
    imageUrl: bodfitUrl,
    description:
      "The BODFIT app aims to develop a mobile application tailored to Nigerians' unique nutrition and fitness needs. It seeks to provide personalized diet and fitness plans, simple home workout routines, and accessible health information to help users achieve their health goals.",
    extLink: "https://youtu.be/D_ITS3G2rdo?si=ybIldefYibqnAhpq",
  },

  {
    id: 5,
    tags: ["emb", "web", "all"],
    title: "WLAN-Web system",
    imageUrl: embyUrl,
    description:
      "Here, I use a NodeMCU mirco-controller to create an access point for users to interact with a system via a captive portal.",
    extLink: "https://github.com/dk-okonkwo/bus-transportation-system",
  },

  {
    id: 6,
    tags: ["emb", "all"],
    title: "Remote Control Light bulb",
    imageUrl: bulbUrl,
    description:
      "Designed and implemented a circuit that use an arduino and an IR sensor to turn on a light bulb",
    extLink:
      "https://www.loom.com/share/de064d77a2e64d29b2c5f753605dad5d?sid=fd13e272-89ec-4498-8603-bc79c864ecfc",
  },
];
