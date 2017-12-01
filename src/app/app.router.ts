import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { CityComponent } from './city/city.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'state', component: StateComponent },
    { path: 'district', component: DistrictComponent },
    { path: 'city', component:  CityComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);