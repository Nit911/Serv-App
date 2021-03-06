import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor( private dataService : DataService, private fb : FormBuilder) { }

  events = [
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510045",
        "name": "Event_1",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510046",
        "name": "Event_2",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510047",
        "name": "Event_3",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510048",
        "name": "Event_4",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb4510049",
        "name": "Event_5",
        "Discription": "lorem ipsom"
    },
    {
        "isActive": true,
        "createdDate": "2022-01-25T12:22:23.720Z",
        "_id": "60a223df91ede1dcb451004a",
        "name": "Event_6",
        "Discription": "lorem ipsom"
    }
]

  ngOnInit(): void {
    //this.events = this.dataService.getEventsData()
    //this.dataService.getEventsData().subscribe(( data : any ) => this.events = data)
  } 

  button(){
    console.log(this.events)
  }

}
