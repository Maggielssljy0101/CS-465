import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

];

/*export const routes: Routes = [
  {
    path: 'add-trip',
    loadComponent: () =>
      import('./add-trip/add-trip.component').then(m => m.AddTripComponent)
  },
  {
    path: 'edit-trip',
    loadComponent: () =>
      import('./edit-trip/edit-trip.component').then(m => m.EditTripComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./trip-listing/trip-listing.component').then(m => m.TripListingComponent),
    pathMatch: 'full'
  }
]; */
