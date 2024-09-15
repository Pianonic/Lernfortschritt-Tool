import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AvatarComponent, HeaderModule, NavModule } from '@coreui/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, HeaderModule, NavModule, RouterLink, AvatarComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lernfortschritt-Tool';
}
