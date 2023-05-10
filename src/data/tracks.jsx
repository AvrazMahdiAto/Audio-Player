// audio files
import Ibrahim from "./Ibrahim-Tatlise.mp3";
import Ibrahime from "./ASIQ-SON.mp3";
import beautiful from "./a_beautiful_day.mp3";
import world from "./We_Are_The_World.mp3";
import top from "./dbang-world.mp3";
import cinematic from "./cinematic-time-lapse-115672.mp3";
import forest from "./forest-lullaby-110624.mp3";
import podcast from "./the-podcast-intro-111863.mp3";

// audio thumbnails
import lexin from "./lexin.jpeg";
import dbanj from "./dbanj.png";
import jackson from "./jackson.jpeg";
import trinix from "./trinix.jpeg";
import Ibrahimbild from "./Ibrahimbild.jpg";
import Ibrahimbi from "./Ibrahimbi.jpg";

export const tracks = [
  {
    title: "Trinix ft Rushawn – Its a beautiful day",
    src: beautiful,
    author: "Trinix ft Rushawn",
    thumbnail: trinix,
  },

  {
    title: "Ibrahim-Tatlse – banin",
    src: Ibrahim,
    author: "Ibrahim-Tatlises",
    thumbnail: Ibrahimbild,
  },
  {
    title: "Ibrahim-Tatlse –Asiq-son",
    src: Ibrahime,
    author: "Ibrahim-Tatlises",
    thumbnail: Ibrahimbi,
  },
  {
    title: "Michael Jackson – We Are The World",
    src: world,
    author: "Michael Jackson",
    thumbnail: jackson,
  },
  {
    title: "D’banj -Top Of The World",
    src: top,
    author: "Dbanj",
    thumbnail: dbanj,
  },
  {
    title: "Cinematic Time Lapse",
    src: cinematic,
    author: "Lexin Music",
    thumbnail: lexin,
  },
  {
    title: "Forest Lullaby",
    src: forest,
    author: "Lesfm",
  },
  {
    title: "The Podcast Intro",
    src: podcast,
    author: "Music Unlimited",
  },
];
// const audio = new Audio();

// fetch(
//   "https://api.soundcloud.com/tracks/123456789/stream?client_id=YOUR_CLIENT_ID"
// )
//   .then((response) => response.blob())
//   .then((blob) => {
//     audio.src = URL.createObjectURL(blob);
//     audio.play();
//   })
//   .catch((error) => {
//     console.error("Error loading audio file:", error);
//   });
