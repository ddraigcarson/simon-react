const createButton = (id, colour, position) => ({
  id, colour, position,
})

export const buttons = [
  createButton("RED", "#DD4132", "top-left"),
  createButton("YELLOW", "#FFD662", "top-right"),
  createButton("GREEN", "#92B558", "bottom-left"),
  createButton("BLUE", "#00539C", "bottom-right"),
];
