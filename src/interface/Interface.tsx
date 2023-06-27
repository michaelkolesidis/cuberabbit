import "./style.css";
import { useEffect, useRef, useState } from "react";
import { addEffect } from "@react-three/fiber";
import useGame from "../stores/useGame";
import haiku from "../data/haiku";

function Interface() {
  const moves = useGame((state) => state.moves);
  const collectibles = useGame((state) => state.collectibles);
  const collected = useGame((state) => state.collected);
  const startTime = useGame((state) => state.startTime);
  const endTime = useGame((state) => state.endTime);
  const phase = useGame((state) => state.phase);
  const outcome = useGame((state) => state.outcome);

  const firstTime = useGame((state) => state.firstTime);

  // Time
  const time = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      let elapsedTime = 0;

      if (phase === "playing") {
        elapsedTime = Date.now() - startTime;
      } else if (phase === "ended") {
        elapsedTime = endTime - startTime;
      }

      elapsedTime /= 1000;
      elapsedTime = Number(elapsedTime.toFixed(2));

      if (time.current) {
        time.current.textContent = String(elapsedTime);
      }
    });

    return () => {
      unsubscribeEffect();
    };
  }, [phase, startTime, endTime]); // Add dependencies here

  const [haikuNumber] = useState(
    Math.floor(Math.random() * (haiku.length - 1))
  );

  return (
    <>
      <div className="interface">
        <h1>CUBE RABBIT キューブウサギ</h1>
        <p className="version">[ ALPHA ]</p>
        <p>Collect all the items and return to initial position</p>
        <p>アイテムをすべて集めて初期位置に戻る</p>
        <p>You can step on gray only once and on fuchsia twice</p>
        <p>グレーは 1 回だけ、フクシアは 2 回しか踏めません</p>
        <br />
        <div className="stats-table-title">DEBUG PANEL</div>
        <div className="stats-table">
          <p>First Time</p>
          <p>{String(firstTime).toUpperCase()}</p>
          <p>Phase</p>
          <p>{phase.toUpperCase()}</p>
          <p>Collected</p>
          <p>
            {collected}/{collectibles}
          </p>
          <p>Moves</p>
          <p>{moves}</p>
          <p>Time</p>
          <p ref={time}></p>
        </div>
        {phase === "ended" &&
          (outcome === "win" ? (
            <div className="gameover">
              <p>LEVEL CLEAR!</p>
              <p>レベルクリア！</p>
            </div>
          ) : (
            <div className="gameover">
              <p>YOU LOST!</p>
              <p>負けました</p>
            </div>
          ))}
        <div className="haiku">
          <p>{haiku[haikuNumber]["line1"]}</p>
          <p>{haiku[haikuNumber]["line2"]}</p>
          <p>{haiku[haikuNumber]["line3"]}</p>
        </div>
      </div>
    </>
  );
}

export default Interface;
