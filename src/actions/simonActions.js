import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  increment: ["count"],
  decrement: ["count"],
  reset: ["count"],
});

const Actions = {
  Types,
  Creators
};

export default Actions;
