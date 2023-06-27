import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
// import { lsGet, lsSet } from "./utils";

type State = {
  // Player position
  initialPlayerPositionX: number;
  initialPlayerPositionZ: number;
  setInitialPlayerPositionX: (x: number) => void;
  setInitialPlayerPositionZ: (z: number) => void;
  playerPositionX: number;
  playerPositionZ: number;
  setPlayerPositionX: (x: number) => void;
  setPlayerPositionZ: (z: number) => void;
  // Player moves
  moves: number;
  addMove: () => void;
  // Collectibles
  collectibles: number | null;
  setCollectibles: (amount: number) => void;
  collected: number;
  collect: () => void;
  // Time
  startTime: number;
  endTime: number;
  // Phases
  phase: "ready" | "playing" | "ended";
  start: () => void;
  restart: () => void;
  end: (outcome: string) => void;
  outcome: string | null;
  // Other
  firstTime: boolean;
  setFirstTime: (isFirstTime: boolean) => void;
};

const useGame = create<State>()(
  subscribeWithSelector((set) => ({
    /**
     * Player Position
     * The position of the player in the board [x, z]
     */
    initialPlayerPositionX: 0,
    initialPlayerPositionZ: 0,
    setInitialPlayerPositionX: (x: number) => {
      set(() => {
        return {
          initialPlayerPositionX: x,
        };
      });
    },
    setInitialPlayerPositionZ: (z: number) => {
      set(() => {
        return {
          initialPlayerPositionZ: z,
        };
      });
    },
    playerPositionX: 0,
    playerPositionZ: 0,
    setPlayerPositionX: (x: number) => {
      set(() => {
        return {
          playerPositionX: x,
        };
      });
    },
    setPlayerPositionZ: (z: number) => {
      set(() => {
        return {
          playerPositionZ: z,
        };
      });
    },

    /**
     * Player Moves
     * The total moves of the player
     */
    moves: 0,
    addMove: () => {
      set((state) => {
        return {
          moves: state.moves + 1,
        };
      });
    },

    /**
     * Collectibles
     * The items to be collected by the player
     */
    collectibles: null,
    setCollectibles: (amount: number) => {
      set(() => {
        return {
          collectibles: amount,
        };
      });
    },
    collected: 0,
    collect: () => {
      set((state) => {
        return {
          collected: state.collected + 1,
        };
      });
    },

    /**
     * Time
     */
    startTime: 0,
    endTime: 0,

    /**
     * Phases
     * The phase of the game
     */
    phase: "ready",
    start: () => {
      set((state) => {
        if (state.phase === "ready") {
          return { phase: "playing", startTime: Date.now() };
        }
        return {};
      });
    },
    restart: () => {
      set((state) => {
        if (state.phase === "playing" || state.phase === "ended") {
          return { phase: "ready" };
        }
        return {};
      });
    },
    end: (outcome: string) => {
      set((state) => {
        if (state.phase === "playing") {
          const endTime = Date.now();
          const startTime = state.startTime;
          const elapsedTime = endTime - startTime;
          console.log(elapsedTime);
          return { phase: "ended", outcome: outcome, endTime: endTime };
        }
        return {};
      });
    },
    outcome: null,

    /**
     * Other
     *
     */
    firstTime: true,
    setFirstTime: (isFirstTime: boolean) => {
      set(() => {
        return {
          firstTime: isFirstTime,
        };
      });
    },
  }))
);

export default useGame;
