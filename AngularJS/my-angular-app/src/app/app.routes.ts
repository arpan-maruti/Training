import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './property_binding/about.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { SignalsComponent } from './signals/signals.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { FormsComponent } from './template-driven-forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpclientComponent } from './httpclient/httpclient.component';
import { Comp1Component } from './comp1/comp1.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MinitaskComponent } from './minitask/minitask.component';
import { LifecycleParentComponent } from './lifecycle-parent/lifecycle-parent.component';

export const routes: Routes = [
    // {path: 'about', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'about/1', component: AboutComponent},
        {path: 'directives', component: DirectivesComponent,  children: [
            // { path: ':id', component: DirectivesComponent }
            { path: '1', component: DirectivesComponent }
        ]},
    {path: 'lifecycle', component: LifecycleComponent},
    {path: 'signals', component: SignalsComponent},
    {path: 'service', component: ServiceComponentComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'reactive-forms', component: ReactiveFormsComponent},
    {path: 'httpclient', component: HttpclientComponent},
    {path: 'component1', component: Comp1Component},
    {path: 'pipes', component: PipesComponent},
    {path: 'parentchild', component: ParentComponent},
    {path: 'minitask', component: MinitaskComponent},
    {path: 'lifecycle-parent', component: LifecycleParentComponent},
    { path: '**', component: PagenotfoundComponent }, 
    // {
    //     path: '',
    //     loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    // },
    // {
    //     path: 'about/:id',
    //     loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
    // }
];


