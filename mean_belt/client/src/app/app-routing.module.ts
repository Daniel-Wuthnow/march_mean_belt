import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetComponent } from './pet/pet.component';
import { PetNewComponent } from './pet-new/pet-new.component'
import { PetEditComponent } from './pet-edit/pet-edit.component'
import { PetShowComponent } from './pet-show/pet-show.component'

const routes: Routes = [
	{path: '',pathMatch: 'full', component: PetComponent},
	{path: 'new', component: PetNewComponent},
	{path: 'edit/:id', component: PetEditComponent},
	{path: 'details/:id', component: PetShowComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
