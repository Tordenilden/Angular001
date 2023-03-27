import { Component } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
// How do we sort an array? - C# LINQ
// How do we pop an item from array?
// How do we push an item to array?
export class PersonComponent {
// we would like to simulate 1 object and a list and Mark it up...

stringArr:Person[]=[
  {id:5,name:'Bo',age:5},
  {id:2,name:'Bodil',age:53},
  {id:1,name:'Ulla',age:25}
];
personList: Person[]=[];

constructor(private personService:PersonService){}

ngOnInit(){
  // load persons in here...
  //I would like to print out my "method" in log()

  //version 1
  // console.log(this.getPersonsHardcoded());
  // this.personList = this.getPersonsHardcoded();
  // //version 2 - data from service
  // this.personList = this.personService.getPersonsHardcode();

  // //version 3 - from an API
  // this.personService.getPersons().subscribe(
  //   (data)=>{console.log(data);
  //     this.personList=data;
  //   })
  // this.createPerson();

  // //getByID
  // this.personService.getPersonById(1).subscribe(
  //   (data)=>{console.log(data);
  //   }
  // );
  localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
  localStorage.setItem("name22","Erik");
  console.log(localStorage.getItem("token"));

  let name:string[]=["Valbon","Yrsa the Great"]; // [] array
  let something:Person[]=[
   //{id:1,age:5,name:"Gorm the fatty one",mail:"some text"}
  {id:3,age:55,name:"Eric the barbarian"}
];

// this is a jagged array
let hje=[{id:3,names:"something"},{id:3,name:"something", mail:"balbalabl", phil:"the great"}]// typescript is javascript....


// [] array
  //let obj : any = {write some values or some properties in an obj}// obj
  // name[1]
}

getPersonsHardcoded():Person[]{
  return [
    {id:5,name:'Bo',age:5},
    {id:2,name:'Bodil',age:53},
    {id:1,name:'Hansi i nisseland',age:25}
  ];
}
getPersonById(){
  // this gets data from service / API
}
createPerson():void{
// call the service to api...
  let temp:Person = {id:0, name:'Anders', age:35} //?? what the hack...
  // let is a local variable declaration
  console.log(temp);
  // subscribe is typed here cause I want acknowdledge from my API
  this.personService.createPerson(temp).subscribe();
}
}
