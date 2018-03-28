import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PetService } from '../pet.service';
import { LikeService } from '../like.service';
import { Pet } from '../pet'

@Component({
  selector: 'app-pet-show',
  templateUrl: './pet-show.component.html',
  styleUrls: ['./pet-show.component.css']
})
export class PetShowComponent implements OnInit {
	pet;
  constructor(
  	private _petService: PetService,
    private _likeService: LikeService,
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

  petLike(pet){
    console.log("in petLike", pet)
    let observable = this._likeService.createLike(pet);
    observable.subscribe(
      (res)=> {
        console.log("successfull in petLike", res)
      },
      (err)=> {
        console.log("petLike err", err)
      }
      )

  }

  petAdopt(id){
    let observable = this._petService.removePet(id)
    observable.subscribe(()=> {
      this._router.navigate(['/']);
    })
  }

  // petLike(){
  //   this._route.params.subscribe((params) => {
  //     let observable = this._likeService.createLike(params['id']);
  //     observable.subscribe( (res) => {
  //       console.log(res)
        
  //     })
  //   })
  // }

}
