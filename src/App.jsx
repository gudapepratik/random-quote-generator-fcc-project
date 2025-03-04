import { useState } from "react";
import DrumPad from "./componenets/Drumpad";
import "./App.css";

export const drumSounds = [
  { key: "Q", sound: "/sounds/kick.wav", label: "Kick" },
  { key: "W", sound: "/sounds/snare.wav", label: "Snare" },
  { key: "E", sound: "/sounds/hihat.wav", label: "Hi-Hat" },
  { key: "A", sound: "/sounds/tom.wav", label: "Tom" },
  { key: "S", sound: "/sounds/clap.wav", label: "Clap" },
  { key: "D", sound: "/sounds/cowbell.wav", label: "Cowbell" },
  { key: "Z", sound: "/sounds/crash.wav", label: "Crash" },
  { key: "X", sound: "/sounds/ride.wav", label: "Ride" },
  { key: "C", sound: "/sounds/shaker.wav", label: "Shaker" },
];

export default function App() {
  const [displayText, setDisplayText] = useState("Drum Machine");

  const playSound = (key) => {
    const audio = document.getElementById(key);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplayText(drumSounds.find((d) => d.key === key).label);
    }
  };

  return (
    <div className="container" id="drum-machine">
      <h1 id="display">{displayText}</h1>
      <div className="drum-pads">
        {drumSounds.map((drum) => (
          <DrumPad key={drum.key} keyTrigger={drum.key} playSound={playSound} label={drum.label} sound={drum.sound}/>
        ))}
      </div>
    </div>
  );
}
