import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  fs_clientID = "PPOK5TG1N3HHAGLV0NZGYAE2Z3PN1NYILWUFZUDZIAVLUBBC";
  fs_clientSecret = "P0PVZN1JTV4T3L0ULYQTUH1IJMH5J0CUW5NL5PVD54F2R5HQ";
  edamam_id = "a3afde74";
  edamam_key = "b55955428786112be91789b469d0ec54";
  spoonacular_key = "973093c3128f44b9a1875a5536026b94";

  constructor(private _http: HttpClient) { }

  getRestaurants(place) {
    return this._http.get('https://api.foursquare.com/v2/venues/search' + '?client_id=' + this.fs_clientID + '&client_secret=' + this.fs_clientSecret + 
      '&v=20160215&limit=5' + '&near=' + place);
  }

  getRecepies(recipe) {
    return this._http.get('https://api.edamam.com/search?q=' + recipe + '&app_id=' + this.edamam_id + '&app_key=' + this.edamam_key + '&from=0&to=5');
  }

  findByNutrients(data) {
    return this._http.get('https://api.spoonacular.com/recipes/findByNutrients?' + data + '&apiKey='+ this.spoonacular_key);
  }

  recipeByIngredients(ingredients) {
    return this._http.get('https://api.spoonacular.com/recipes/findByIngredients?ingredients=' + ingredients + '&apiKey='+ this.spoonacular_key);
    // https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,%20pepper,%20cheese&number=2&limitLicense=True&ranking=1&ignorePantry=True&apiKey=xxxxxxxxxxxxxxx'
  }

  recipeByCusine(search, cusine) {
    return this._http.get('https://api.spoonacular.com/recipes/complexSearch?query='+ search +'&cuisine=' + cusine + '&apiKey='+ this.spoonacular_key);
    // https://api.spoonacular.com/recipes/complexSearch?query=Chicken%20with%20no%20oil&cuisine=Indian&apiKey=973093c3128f44b9a1875a5536026b94
  }

  getRecipeInfo(id) {
    return this._http.get('https://api.spoonacular.com/recipes/' + id + '/information?includeNutrition=true&apiKey='+ this.spoonacular_key);
    // https://api.spoonacular.com/recipes/716429/information?includeNutrition=false
  }
}
