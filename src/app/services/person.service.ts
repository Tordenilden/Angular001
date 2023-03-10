import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';


//TCP/IP protocol og ip adresses
const httpOptions={
  headers: new HttpHeaders({
    'content-type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
// A service is a code that all components can use
// We code CRUD in here - request/response to API
// this can be coded in several ways - I use HttpClient
// but we can get a module from web, observables or something else...

export class PersonService {

  // URL to my API
  baseURL : string ="https://localhost:7062/api/Person/GetPersons";

  //if ths argument is defined with access modifier then its created as a property
  constructor(private http: HttpClient) { } // ctors is primarily used for DI


  //CORS
  // this is 2 threads that "works" on the same port
  // XMLHttpRequest
  // XMLHttpRequest is the "lowest lvl" of "data" on the "wire"
  // so the path is XMLHttpRequest => Ajax => something modern as C# / Frameworks etc

  //CRUD HardCoded
  getPersonsHardcode():Person[]{
    return [
      {id:5,name:'Haittham',age:12},
      {id:2,name:'Anne',age:44},
      {id:1,name:'Hansi i elefantLand',age:25}
    ];
  }
  //CRUD API
  // Observable is "listening for data"
  getPersons():Observable<Person[]>{
    return this.http.get<Person[]>(this.baseURL);
  }
  baseURL2 : string = "https://localhost:7062/api/";
  createPerson(personToCreate: Person):Observable<Person>{

    return this.http.post<Person>(`${this.baseURL2}Person`,personToCreate,httpOptions);
  }

  // tjek lige data hvad der sker hvis i en variabel...

}
