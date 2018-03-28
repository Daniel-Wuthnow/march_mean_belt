import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetService } from '../pet.service';
import { Pet } from '../pet'

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
	pet;
	errorName;
  errorType;
  errorDesc;
  constructor(
  	private _petService: PetService,
  	private _router: Router,
  	private _route: ActivatedRoute,
  	) { }

  ngOnInit() {
  	this.pet = new Pet();
  	this.getPet();
  }

  getPet() {
    this._route.params.subscribe((params) => {
      let observable = this._petService.getPet(params['id']);
      observable.subscribe( (res) => {
      	console.log(res)
      	this.pet = res
      })
    })
  }

  onSubmit(event){
    event.preventDefault();
    let observable = this._petService.editPet(this.pet._id, this.pet)
    observable.subscribe((res)=>{
      console.log("success",res)
      this._router.navigate([`/details/${this.pet._id}`]);
    },
    (err)=> {
      console.log(err.error.errors)
      this.errorName = err.error.errors.name
      this.errorType = err.error.errors.type
      this.errorDesc = err.error.errors.desc
    }
    )
  }

}
