import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
// search bar and results
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- for loop -->
      <!-- for data to be displayed -->
      <app-housing-location *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
      <!-- let housingLocation of housingLocationList => Aungular Template Syntax -->
      <!-- housingLocation => template variable  -->
      <!-- [housingLocation]="housingLocation" -->
        <!-- => binds the 'housingLocation' property of the 'housingLocation' variable -->
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  // the logic to populate the housingLocationList property
  constructor() {
    this.housingLocationList = this.housingService.
    getAllHousingLocations();
  }
}
