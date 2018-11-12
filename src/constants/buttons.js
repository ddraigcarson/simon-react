export class Button {
  constructor(id, colour, highlightColour, position){
    this.id = id;
    this.colour = colour;
    this.highlightColour = highlightColour;
    this.position = position;
  }
}

const BUTTONS = [
  new Button('RED','#E2948C', '#DD4132', 'top-left'),
  new Button('YELLOW','#FFE9AA', '#FFD662', 'top-right'),
  new Button('GREEN','#A5B787', '#92B558', 'bottom-left'),
  new Button('BLUE','#80B2DD', '#00539C', 'bottom-right'),
];

export default BUTTONS;
