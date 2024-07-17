import { Routes } from '@angular/router';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutProgressComponent } from './components/workout-progress/workout-progress.component';

export const routes: Routes = [
    { path: 'workout-form', component: WorkoutFormComponent },
    { path: 'workout-list', component: WorkoutListComponent },
    { path: 'workout-progress', component: WorkoutProgressComponent },
    { path: '', redirectTo: '/workout-form', pathMatch: 'full' },
];
