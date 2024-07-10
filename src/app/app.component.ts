import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
// 1. In template, Add main, header,logo.
// 2. Add <section> and home component <app-home>.
// 3. Add imports at top and in decorative metadata
// 4. go to home.component.ts to add search bar and results
@Component({
  standalone: true,
  selector: 'app-root',
  template:`
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        <!-- aria-hidden since the logo purely decorative -->
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent],
})
export class AppComponent {
  title = 'homes';
}
