import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'recipe test',
      `https://hips.hearstapps.com/del.h-cdn.co/assets/17/51/1600x800/
      landscape-1513895273-delish-greek-stuffed-chicken-3.jpg?resize=768:*`),
    new Recipe('Testname', 'recipe test',
      'https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  displayDetail(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
