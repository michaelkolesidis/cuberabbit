import useGame from "../stores/useGame";

function Interface() {
  const moves = useGame((state) => state.moves);
  const collectibles = useGame((state) => state.collectibles);
  const collected = useGame((state) => state.collected);
  const phase = useGame((state) => state.phase);
  const firstTime = useGame((state) => state.firstTime);

  return (
    <>
      <div className="interface">
        <h1>CUBE RABBIT</h1>
        <p className="version">[ ALPHA ]</p>
        <p>Collect all the items and return to initial position</p>
        <br />
        <div className="stats-table">
          <p>First Time</p>
          <p>{String(firstTime).toUpperCase()}</p>
          <p>Phase</p>
          <p>{phase.toUpperCase()}</p>
          <p>Collected</p>
          <p>{collected}/{collectibles}</p>
          <p>Moves</p>
          <p>{moves}</p>
        </div>
        {phase === "ended" && <p>LEVEL CLEAR!</p>}
      </div>
    </>
  );
}

export default Interface;
