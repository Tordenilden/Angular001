export class Seat{
  seatId:number=0;
  seatRow:number=0;
  seatCol:number=0;
  // need a behavior for the colors... we can use boolean - those that we can choose and the chosen  -- reserved is another state
  // or have a variable with 3 states.
  selection:number=0;
}
