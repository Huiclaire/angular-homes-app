import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocation?.id }}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // inject 'ActivatedRoute' into the component
  route: ActivatedRoute = inject(ActivatedRoute);
  // Dependency injection
  // 1.housingService is an instance of HousingService, which will be injected into the component.
  // 2.housingLocation is a variable of type HousingLocation | undefined, which will
  //   store the details of a specific housing location.
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  // if housing location is undefined, the id property wont be accessed, to prevent error.


  // Constructor initialization
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.
    getHousingLocationById(housingLocationId);
  }
}
