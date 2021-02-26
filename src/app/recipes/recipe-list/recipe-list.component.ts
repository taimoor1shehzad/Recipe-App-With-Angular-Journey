import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'very very good', 'https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023.jpg'),
    new Recipe('A Test Recipe', 'very very good', 'https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023.jpg'),
    new Recipe('A Test Recipe', 'very very good', 'https://www.foodiecrush.com/wp-content/uploads/2019/05/Grilled-Salmon-foodiecrush.com-023.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
