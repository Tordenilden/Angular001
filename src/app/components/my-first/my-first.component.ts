import { Component } from '@angular/core';
// import ... henter data fra andre filer.. svare til using i c#

// This is called a decorator, the selector: is important
@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})

// A class consists of Properties and methods
// Its a Type

export class MyFirstComponent {
  variableName : string = "Hello"; // its almost like JSON
  data2 : number =123; // there is only number in this Language
  myArr : number[]= [1,2,3]; // Defines and array and initialize
  stringArr : string[] = ['Bo','Erik','Bodil','Eriksonn'];
  // You can "use" variables in 4-5 different ways in a Template (HTML is a Template)

  movies: Movie[] =[
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
  ]
  // ng g c foldername/filnavn
  data : Coffe[]=[
    {taste:'bad',milk:true},
    {taste:'good',milk:false},
    {taste:'nice',milk:false},
    {taste:'hot hot',milk:true},
  ]

  ngOnInit(){
    this.hat(); // this is class scope
  }
  hat():void{
    console.log("this is for test purposes only");

  }
  methodName():void{
    console.log("btn has clicked");
  }
}

class Coffe{
  taste : string ="";
  milk : boolean=false;
}

class Movie {
  title : string="";
  director : string="";
  cast : string="";
  releaseDate : string="";
}
