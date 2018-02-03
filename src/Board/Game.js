import Space from './Space.js';

export default class Game {
  constructor(players){
    this.numPlayers = players.length;
    this.numSpaces = this.numPlayers*3;
    this.possibleTypes = ['vending machine', 'assembly line', 'doll house', 'miniature train track', 'sewing machine', 'kitchen', 'truck', 'bouncy castle', 'maze', 'office', 'ball pit', 'sandbox', 'gingerbread house'];
    this.existingTypes = ['cupboard', 'storage room', 'box'];
    this.assignUniqueSpaces = this.assignUniqueSpaces.bind(this);
    this.assignUniqueSpaces();
  }

  assignUniqueSpaces(){

    for(let i=this.existingTypes.length; i<this.numSpaces; i++){
      console.log('hoi');
      while (true){
        let randomType = this.possibleTypes[Math.floor(Math.random()*this.possibleTypes.length)]
        console.log(randomType);
        if(!this.existingTypes.includes(randomType)){
          this.existingTypes.push(randomType);
          break;
        }
      }
    console.log(this.existingTypes);
    }
  }
}
