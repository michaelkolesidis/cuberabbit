import useGame from "../stores/useGame";

function Interface() {
  const moves = useGame((state) => state.moves);
  const collectibles = useGame((state) => state.collectibles);
  const collected = useGame((state) => state.collected);
  const phase = useGame((state) => state.phase);

  return (
    <>
      <div className="interface">
        <h1>CUBE RABBIT</h1>
        <p className="version">[ ALPHA ]</p>
        <p>Collect all the items and return to initial position</p>
        <br />
        <p>
          Phase
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {phase.toUpperCase()}
        </p>
        <p>
          Collected &nbsp;&nbsp;&nbsp; {collected}/{collectibles}
        </p>
        <p>
          Moves
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {moves}
        </p>
        {phase === "ended" && <p>LEVEL CLEAR!</p>}
      </div>
    </>
  );
}

export default Interface;
