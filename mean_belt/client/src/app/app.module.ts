import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { PetService } from './pet.service';
import { LikeService } from './like.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { PetNewComponent } from './pet-new/pet-new.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetShowComponent } from './pet-show/pet-show.component';



@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    PetNewComponent,
    PetEditComponent,
    PetShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    PetService,
    LikeService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
