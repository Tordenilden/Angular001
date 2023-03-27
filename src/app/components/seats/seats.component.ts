import { Component, OnInit } from '@angular/core';
import { Seat } from 'src/app/models/Seat';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent{


  seatList:Seat[]=[]; // 1 green   3 chosen  2 reserved
  str : number[]=[];
  ngOnInit(){
    //#region hardcoded data
    //here we wants some data
    //this.string1="here is data";
    this.seatList= [
      {seatId:1, seatCol:1,seatRow:1,selection:1},
      {seatId:2, seatCol:1,seatRow:2,selection:1},
      {seatId:3, seatCol:1,seatRow:3,selection:2},
      {seatId:4, seatCol:1,seatRow:4,selection:1},
      {seatId:5, seatCol:2,seatRow:1,selection:1},
      {seatId:6, seatCol:2,seatRow:2,selection:1},
      {seatId:7, seatCol:2,seatRow:3,selection:1},
      {seatId:8, seatCol:2,seatRow:4,selection:1},
    ];
    console.log(this.seatList);
    // in HTML after seat number 4 I want to change line...

    //#endregion

    // 0) we only have 1 layout !!
    // 0.1) we send to api what seats we have clicked..

    // 1) We need to get data to seat array from API... to see how the Hall
    // is built

    // 2) the seats we have clicked, has to be reserved.. how do we do that??


  }
  choosed(temp:Seat){
    //color the one we click
    // or we should make a third button  <---
    // how can I change button 1 to button 3??

    // how can I choose 1 or 3??
    // if I am green I want red
    // if Iam red I want green
    // BUT we need another state, we have to measure if we have changed state
    console.log(temp);
   // temp.selection=3; // always red...
    if(temp.selection==1) // green
    {
      temp.selection=3; // red
    }else{
      temp.selection=1;//green
    }
    // if(grøn) rød
    // if(rød) grøn


// define tempSeatArray
// everytime u click a green button u use push()
// if the element (button) all rdy exists in tempSeatArray
// then I remove it
// 1) to test if element exists I use tempSeatArray.indexOf(5) // 5 has to be the Seat u clicked
// 2) if false push()
// 3) if true remove at index position...

    // const array = [2, 5, 9];
    // console.log(array);
    // const index = array.indexOf(5);
    // if (index > -1) { // only splice array when item is found
    //   array.splice(index, 1); // 2nd parameter means remove one item only
    // }

    // // array = [2, 9]
    // console.log(array);
  }
}
