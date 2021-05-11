import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  serverUrl;
  fs_clientID = "PPOK5TG1N3HHAGLV0NZGYAE2Z3PN1NYILWUFZUDZIAVLUBBC";
  fs_clientSecret = "P0PVZN1JTV4T3L0ULYQTUH1IJMH5J0CUW5NL5PVD54F2R5HQ";
  edamam_id = "a3afde74";
  edamam_key = "b55955428786112be91789b469d0ec54";
  spoonacular_key = "973093c3128f44b9a1875a5536026b94";

  private recipeResults = new BehaviorSubject<any[]>(null);
  getUpdatedRecipeResults = this.recipeResults.asObservable();

  constructor(private _http: HttpClient) {
    this.serverUrl = environment.serverUrl;
   }

  updateRecipeResults(value: any[]) {
    this.recipeResults.next(value);
  }

  getRestaurants(place, recipe) {
    return this._http.get('https://api.foursquare.com/v2/venues/search' + '?client_id=' + this.fs_clientID + '&client_secret=' + this.fs_clientSecret + 
      '&v=20160215&limit=5' + '&near=' + place+ '&query=' + recipe);
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

  getNutritionByName(name){
    return this._http.get('https://api.spoonacular.com/recipes/guessNutrition?title=' + name + '&apiKey='+ this.spoonacular_key);
    // https://api.spoonacular.com/recipes/guessNutrition?title=Cheese%20Pizza&apiKey=973093c3128f44b9a1875a5536026b94
  }

  getCalorieCount(name){
    return this._http.get('https://api.edamam.com/api/nutrition-data?app_id=' + this.edamam_id + '&app_key=' + this.edamam_key + '&ingr='+ name);
    // https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&ingr=1%20large%20apple
  }

  addToFavorite(item){
    return this._http.post(this.serverUrl+'/recipes/favourites',item);
  }

  updateToFavorite(obj) {
    return this._http.put(this.serverUrl+'/recipes/favourites',obj);
  }

  getFavorite(id){
    const url = `${this.serverUrl}/recipes/favourites/${id}`;
    return this._http.get(url);
  }
}
