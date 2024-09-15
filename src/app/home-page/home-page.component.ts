import { Component } from '@angular/core';
import { RedirectCommand, RouterLink } from '@angular/router';
import { ButtonModule, CardBodyComponent, CardComponent } from '@coreui/angular';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, CardBodyComponent, ButtonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
