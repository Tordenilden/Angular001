import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent {

  // reactive forms
  customer = new FormGroup(
    {
      customerId : new FormControl(''),
      accountId : new FormControl('test',Validators.required),
      firstName : new FormControl('',[Validators.required,Validators.minLength(2)]),
      lastName : new FormControl('',),
      address : new FormControl('',),
      phoneNumber : new FormControl('')
    }
  );//Formgroup end
    /**
     *
     */
    constructor(private customerService:PersonService) {


    }
  reactiveForms():void{
    console.log(this.customer.value);
    //this.customerService.createPerson(this.customer).subscribe();
  }
  testing(){
    console.log("this is a test");

  }
}
// customerId: number=0; // strict mode...
//   accountId: number=0;
//   firstName: string="";
//   lastName: string="";
//   address: string="";
//   phoneNumber: number=0;
