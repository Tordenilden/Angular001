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
  //version 2 - data from service
  //this.personList = this.personService.getPersonsHardcode();

  //version 3 - from an API
  this.personService.getPersons().subscribe(
    (data)=>{console.log(data);
    }
  )
  this.createPerson();
}

getPersonsHardcoded():Person[]{
  return [
    {id:5,name:'Bo',age:5},
    {id:2,name:'Bodil',age:53},
    {id:1,name:'Hansi i nisseland',age:25}
  ];
}
getPersons(){
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
