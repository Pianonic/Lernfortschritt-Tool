import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputGroupComponent, ProgressBarComponent, ProgressComponent, ProgressStackedComponent } from '@coreui/angular';

@Component({
  selector: 'app-learning-progress-planing',
  standalone: true,
  imports: [ProgressComponent, ProgressBarComponent, ProgressStackedComponent, NgFor, InputGroupComponent],
  templateUrl: './learning-progress-planing.component.html',
  styleUrl: './learning-progress-planing.component.scss'
})
export class LearningProgressPlaningComponent {

}
