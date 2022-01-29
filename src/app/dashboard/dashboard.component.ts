import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private route : Router,private dataService : DataService, private fb : FormBuilder) { }

  ngOnInit(): void {
    //this.events = this.dataService.getSpecialEventsData()
    //this.dataService.getSpecialEventsData().subscribe(( data : any ) => this.specialEvents = data)
  }

  specialEvents = [
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510045",
        "name": "My_Special_Event_1",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-26T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510046",
        "name": "My_Special_Event_2",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-27T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510047",
        "name": "My_Special_Event_3",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-28T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510048",
        "name": "My_Special_Event_4",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-29T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510049",
        "name": "My_Special_Event_5",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-30T12:22:23.720Z",
        "_id": "60a223df91ede1dcb451004a",
        "name": "My_Special_Event_6",
        "Discription": "lorem ipsom"
    }
]

button(){
  console.log(this.specialEvents)
}

  logout(){
    localStorage.removeItem('token')
    this.dataService.logged()
    this.route.navigate(['/Login'])
  }
}
