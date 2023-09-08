import { Component } from '@angular/core';


//Esta directiva la convierte en un componente
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})


//Un componente es una clase común y corriente, la directiva @Component
//La convierte en un componente
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 46;

  //Método getter
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${this.age}`
  }

  changeHero():void {
    this.name = 'spiderman';
  }

  changeAge():void {
    this.age=23;
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 46;
  }

}
