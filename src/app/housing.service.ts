// 1. import housing interface
// 2. add protected property

import { Injectable } from '@angular/core';
// we can use this class in dependency injection system
// = other parts of the can request an instance of this service
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root' //where the service can be injected, root = throughout the application
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() { }

  // make a call to the web server configured
  // use asynchronous code to make a GET request over HTTP
  async getAllHousingLocations() : Promise<HousingLocation> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  // find function will return the first match in the array
  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
