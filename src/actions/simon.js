import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  gameInProgress: ["value"],
  gameWon: ["value"],
  gameLost: ["value"],
  reset: [],
});

const Actions = {
  Types,
  Creators
};

export default Actions;
