import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DocumentsComponent } from './documents/documents.component';
import { LearningProgressComponent } from './learning-progress/learning-progress.component';
import { LearningProgressPlaningComponent } from './learning-progress-planing/learning-progress-planing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'M319', redirectTo: '/M319/Documents', pathMatch: 'full' },
    { path: 'M319/Documents', component: DocumentsComponent },
    { path: 'M319/LearningProgress/Rating', component: LearningProgressComponent },
    { path: 'M319/LearningProgress/Planing', component: LearningProgressPlaningComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
