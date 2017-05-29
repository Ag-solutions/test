import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SearchingComponent } from './searching/searching.component';
import { ProjectComponent } from './project/project.component';


export const router: Routes = [
    { path: '', redirectTo: '/searching', pathMatch: 'full'},
    { path: 'searching', component: SearchingComponent,
        children: [
            { path: ':id', component: ProjectInfoComponent,
            children: [
                { path: ':id', component: ProjectComponent}
            ]},
        ]},
    {path: "**", component: SearchingComponent}
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);