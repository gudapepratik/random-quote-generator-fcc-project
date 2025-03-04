import { useEffect } from "react";

export default function DrumPad({ keyTrigger, sound, label, playSound }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === keyTrigger) {
        playSound(keyTrigger);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [keyTrigger, playSound]);

  return (
    <button
      className="drum-pad"
      id={`drum-${keyTrigger}`}
      onClick={() => playSound(keyTrigger)}
    >
      {keyTrigger}
      <audio id={keyTrigger} src={sound} className="clip"></audio>
    </button>
  );
}
