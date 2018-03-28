import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { Pet } from '../pet'

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
	pet;
  errorName;
  errorType;
  errorDesc;
  constructor(
  		private _petService: PetService,
  		private _router: Router,
  	) {
	this.pet = new Pet();
  }

  ngOnInit() {
  }

  onSubmit(event){
  	event.preventDefault()
  	console.log('this.pet is', this.pet)
  	let observable = this._petService.addPet(this.pet)
  	observable.subscribe(
  		(res)=> {
  			console.log("res",res)
        this._router.navigate(['/']);
  		},
  		(err)=> {
        console.log(err)
        this.errorDesc = err.error.errors.description.message
        this.errorType = err.error.errors.type.message
        this.errorName = err.error.errors.name.message
  			console.log('error',err.error.errors)
  		}
  	)
  }

}
