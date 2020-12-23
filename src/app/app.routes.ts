
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
//export const app_routing = RouterModule.forRoot(APP_ROUTES, { useHash:true });