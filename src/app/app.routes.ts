import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddCitationComponent } from './add-citation/add-citation.component';

export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'addCitation', component: AddCitationComponent},
    {path: '**', component: HomepageComponent},

];
