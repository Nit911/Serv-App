import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private route : Router, public dataService : DataService ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.dataService.logged()
    this.route.navigate(['/Login'])
  }
}
