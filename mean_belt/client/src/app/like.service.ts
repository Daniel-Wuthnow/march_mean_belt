import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LikeService {

  constructor(private _http: HttpClient) { }

  createLike(pet){
  	console.log("service", pet)
  	return this._http.post('/like', pet)
  }

}
