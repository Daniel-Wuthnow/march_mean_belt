import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { Pet } from '../pet'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
	pets;
	error;
  constructor(
  		private _petService: PetService,
  		private _router: Router,
  	) { }

  ngOnInit() {
  	let observable = this._petService.getPets()
  	observable.subscribe(
  		(res)=> {
  			console.log(res)
  			this.pets = res;
  		},
  		(err)=> {
  			console.log(err)
  			this.error = err;
  		}
  	)
  }

}
