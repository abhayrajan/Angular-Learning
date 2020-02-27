import { Component, OnInit } from "@angular/core";
import { IHero } from "./../IHero";
import { HEROES } from "./../mock-heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  hero: IHero = {
    id: 1,
    name: "Windstorm"
  };

  constructor() {}

  ngOnInit(): void {}
}
