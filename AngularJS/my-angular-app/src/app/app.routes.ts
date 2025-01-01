import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/property_binding/about.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SignalsComponent } from './signals/signals.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { FormsComponent } from './template-driven-forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'about/1', component: AboutComponent},
    {path: 'directives', component: DirectivesComponent},
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'signals', component: SignalsComponent},
    {path: 'service', component: ServiceComponentComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'reactive-forms', component: ReactiveFormsComponent},
    // {
    //     path: '',
    //     loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    // },
    // {
    //     path: 'about/:id',
    //     loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    // }
];
