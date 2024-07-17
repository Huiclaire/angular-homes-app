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
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- for loop -->
      <!-- for data to be displayed -->
      <app-housing-location *ngFor="let housingLocation of filteredLocationList"
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
  filteredLocationList: HousingLocation[] = [];
  // the logic to populate the housingLocationList property
  constructor() {
    // this.housingLocationList = this.housingService.
    // getAllHousingLocations();
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });

  }
  filterResults(text: string) {
  if (!text) this.filteredLocationList = this.housingLocationList;

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
  }
}
