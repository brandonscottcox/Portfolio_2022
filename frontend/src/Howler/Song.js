import { Howl, Howler } from "howler";
import DEATH from "./Tracks/DEATH.wav";
import SAIYAN from "./Tracks/SAIYAN.wav";
import Soundcloud from "../Images/SoundcloudTrans.png";


export default function Song() {
    let sound = null;
  function togglePlay(src) {
    if (sound != null) {
        sound.stop();
        sound.unload();
        sound = null;
    }
    sound = new Howl({
      src: [SAIYAN],
    });
    return (
      <img
        src={Soundcloud}
        onClick={() => (sound.playing() ? sound.stop() : sound.play())}
      />
    );
  }

  Howler.volume(1);
  return <div className="Img">{togglePlay()}</div>;
}




/*
import { Howl, Howler } from "howler";
import DEATH from "./Tracks/DEATH.wav";
import SAIYAN from "./Tracks/SAIYAN.wav";
import Soundcloud from "../Images/SoundcloudTrans.png";
import React, { useState,  useRef } from "react";




export default function Song({musicOn, setMusicOn}) {
    let toggled = useRef(false);

    const handleToggleBody  = () => {
        toggled.current = !toggled.current;
      }

    const handleRave = () => {
        Howler.volume(0.8);
        if(toggled === false){
            sound.current.play();
            console.log("start")
        }
        if(handleToggleBody === true) {
            sound.current.stop();
            console.log("stop")
        }
        console.log(toggled)
    }

    const sound = useRef(new Howl({
        src: [SAIYAN]
    }));

//     let sound = null;
//   function togglePlay(src) {
//     if (sound != null) {
//         sound.stop();
//         sound.unload();
//         sound = null;
//     }
//     sound = new Howl({
//       src: [SAIYAN],
//     });
//     return (
//         <a href="window.location.href">

//             <img
//               src={Soundcloud}
//               onClick={() => (sound.current.playing() ? sound.stop() : sound.play())}
//             />
//         </a>
//           );
//   }

//   Howler.volume(1);
  return <div className="Img">{
    musicOn === false
   ? 
    <button style={{padding: "10px"}} onClick={() => handleRave()}>Click to begin!</button>
   : 
    <button style={{padding: "10px"}} onClick={() => handleRave()}>Stop raving</button>    
   }
   </div>;
}
*/