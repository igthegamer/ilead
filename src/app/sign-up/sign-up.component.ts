import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{
  firstName: string ="";
  lastName: string ="";
  email: string ="";
  password: string ="";
  address: string ="";
  phone_number: string="";
  role =new FormControl('');

  constructor(private http: HttpClient)
  {}
  ngOnInit() { }


  register()
  {

    let bodyData = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "email":this.email,
      "password":this.password,
      "address" : this.address,
      "phone_number" : this.phone_number,
      "role":this.role.value,
    };

    this.http.post("http://localhost:8081/api/v1/registration",bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("Client Registered Successfully")

      this.firstName = '';
      this.lastName,
        this.email,
        this.password,
        this.address = '';
      this.phone_number  ='';
      this.role.setValue('');
    });
  }

  save()
  {
    this.register();
  }
}
