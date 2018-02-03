export default class Space {
  constructor(type){
    this.type = type;
    this.occupiedStrength = 0;
    this.place = this.place.bind(this);
  }

  place(piece, add){
    this.occupiedStrength = piece.strength + add;
  }
}
