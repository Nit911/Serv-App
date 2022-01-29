import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public usersUrl = "https://jsonplaceholder.typicode.com/users"

  public userData = "../assets/users.json"

  public login : boolean = false

  public eventData = "./assets/events.json"

  public eventsUrl = 'https://github.com/Nit911/Serv-App/blob/main/src/assets/events.json'

  public specialEventsData = "../assets/specialevents.json"

  specialEventsUrl = "https://github.com/Nit911/Serv-App/blob/main/src/assets/specialEvents.json"

  constructor( private http : HttpClient ) { }

  getData(){
    return this.userData
  }

  getUserData(){
    return this.http.get(this.usersUrl)
  }

  getLogin(){
    return this.login
  }

  logged():any{
    // this.login = !this.login
    if(localStorage.getItem('token')){
      return !this.login
    }
  }

  getEventsData(){
    return this.eventData
  }

  // getEventsData(){
  //   return this.http.get(this.eventsUrl)
  // }

  getSpecialEventsData(){
    return this.specialEventsData
  }

  // getSpecialEventsData(){
  //   return this.http.get(specialEventsUrl)
  // }
}
