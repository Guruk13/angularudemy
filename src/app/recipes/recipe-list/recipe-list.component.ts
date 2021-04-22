import { Component, OnInit } from '@angular/core';
import {Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Kore wa shiren Recipe da ', " Kakoite you shiremanenai",
     "https://www.infoescola.com/wp-content/uploads/2018/03/sagui-de-tufos-brancos_790108426-1000x667.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
