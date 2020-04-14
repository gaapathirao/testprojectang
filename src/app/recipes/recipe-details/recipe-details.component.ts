import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  addToShoppingList(){
    console.log('in addToShoppingList');
    this.recipesService.addIngredientsShoppingList(this.recipe.ingredients);
  }

}
