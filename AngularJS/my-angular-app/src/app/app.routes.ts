import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DirectivesComponent } from './directives/directives.component';
export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'about/:id', component: AboutComponent},
    {path: 'directives', component: DirectivesComponent},

    // {
    //     path: '',
    //     loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    // },
    // {
    //     path: 'about/:id',
    //     loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    // }
];
