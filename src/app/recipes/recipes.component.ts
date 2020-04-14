import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
   selectedRecipeInRecipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {this.selectedRecipeInRecipe = recipe; }
      );
  }


}