import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

 @Injectable()
export class RecipesService {
   constructor(private shoppingListService: ShoppingListService) {
   }
  recipeSelected = new  EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('test recipe' , 'test recipe description' ,
      'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/06/White-Pasta-Sauce-Recipe-Step-By-Step-Instructions.jpg?fit=1901%2C2007&quality=65&strip=all&ssl=1',
      [
        new Ingredient('meat', 1),
        new Ingredient('chilli', 1)
      ]),
    new Recipe('another test recipe' , 'test recipe description' ,
      'https://i0.wp.com/vegecravings.com/wp-content/uploads/2018/06/White-Pasta-Sauce-Recipe-Step-By-Step-Instructions.jpg?fit=1901%2C2007&quality=65&strip=all&ssl=1',
      [
        new Ingredient('buns', 1),
        new Ingredient('meat', 1)
      ])

  ];

  grtRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    console.log(' recipe service in addIngredientsShoppingList');
    this.shoppingListService.addIngredients(ingredients);
  }


}
