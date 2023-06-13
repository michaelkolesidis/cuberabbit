import useGame from "../../stores/useGame";
import { lsGet, lsSet } from "../../stores/utils";

function checkFirstTimeVisit() {
  if (typeof localStorage !== "undefined") {
    const isFirstTime = lsGet("firstTime");
    if (isFirstTime === null) {
      // The visitor is accessing the website for the first time
      lsSet("firstTime", "true");
      useGame.getState().setFirstTime(true);
    } else {
      // The visitor has already visited the website before
      if (Boolean(isFirstTime) === true) {
        lsSet("firstTime", "false");
        useGame.getState().setFirstTime(false);
      }
    }
  }
}

export default checkFirstTimeVisit;
