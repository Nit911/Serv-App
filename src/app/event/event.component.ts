import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor( private dataService : DataService) { }

  events : any

  ngOnInit(): void {
    // this.events = this.dataService.getEventsData()
    //this.dataService.getEventsData().subscribe(( data : any ) => this.events = data)

  } 
  button(){
    console.log(this.events)
  }

}
