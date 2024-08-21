import triviaUrl from "../assets/images/triviatwo.png";
import wpmUrl from "../assets/images/fee-gen-img.png";
import dnaUrl from "../assets/images/dna-farm.png";
import bodfitUrl from "../assets/images/bodfit.png";
import embyUrl from "../assets/images/emby.jpg";
import bulbUrl from "../assets/images/bulb.png";

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
    tags: ["web", "emb", "all"],
    title: "Digital Nourish Africa",
    imageUrl: dnaUrl,
    description:
      "The web application serves as a centralized hub for farmers, providing them with local weather updates, water requirements, and soil conditions data for various crops. It empowers farmers to make informed decisions on planting, irrigating, and harvesting, optimizing resource usage and minimizing the impact of climate change on traditional farming calendars.",
    extLink: "https://digitalnourishafrica.netlify.app/",
  },

  {
    id: 3,
    tags: ["web", "all"],
    title: "TriviaGeo",
    imageUrl: triviaUrl,
    description:
      "TriviaGeo is a web application trivia game testing player's general geography knowledge. Built on React framework, TriviaGeo is powered by Trivia DB's API.",
    extLink: "https://dkokonkwo.github.io/trivia-geo/",
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
