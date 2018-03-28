import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PetService {

  constructor(private _http: HttpClient) { }

  getPets(){
  	return this._http.get('/pets')
  }

  getPet(id){
  	return this._http.get(`/pets/${id}`)
  }

  addPet(pet) {
  	return this._http.post('/pets', pet)
  }

  editPet(id, pet){
    return this._http.put(`/edit/${id}`, pet)
  }

  removePet(id){
    return this._http.delete(`/pets/${id}`)
  }



}
