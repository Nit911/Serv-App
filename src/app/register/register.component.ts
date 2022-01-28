import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private route : Router ) { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    console.log(value)
    alert("Registration is Successful")
    this.route.navigate(['/Login'])
  }
}
