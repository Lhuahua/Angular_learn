/*
 * @Author: your name
 * @Date: 2021-07-13 16:58:36
 * @LastEditTime: 2021-07-14 15:16:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project1\src\app\heroes\heroes.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes=HEROES;
  // hero:Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  heroes:Hero[]=[];
  constructor(private heroSerive:HeroService) { }

  ngOnInit(): void {
    
    this.getHeroes();
    
  }
  getHeroes():void{
    this.heroSerive.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
