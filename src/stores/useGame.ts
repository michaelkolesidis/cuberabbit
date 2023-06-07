// Copyright (c) 2023 Michael Kolesidis <michael.kolesidis@gmail.com>
// Licensed under the GNU Affero General Public License v3.0.
// https://www.gnu.org/licenses/gpl-3.0.html

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
// import { getLocalStorage, setLocalStorage } from "./utils";

type State = {
  // Player position
  playerPositionX: number;
  playerPositionZ: number;
  setPlayerPositionX: (x: number) => void;
  setPlayerPositionZ: (z: number) => void;
};

const store = create<State>()(
  subscribeWithSelector((set) => ({
    /**
     * Player Position
     * The position of the player in the board [x, z]
     */
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
  }))
);

export default store;
