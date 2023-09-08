import { Component } from '@angular/core';

//Directiva que la clase comun y corriente la hace un componente
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Creo un arreglo de héroes
  public heroNames:string[] = [
    'Spiderman',
    'Superman',
    'Tor',
    'Hulk',
    'She Hulk'
  ];

  //Lo defino aqui para que sea de ámbito global
  //le digo que será opcional con el signo de interrogación seguido al nombre
  public deletedHero?:string;

  removeLastHero():void {
    //Si sólo lo defino aqui sera de este ámbito,
    //por eso lo defino en la clase
    //pop remueve el último elemento de un arreglo
    this.deletedHero = this.heroNames.pop();
    
  }
}
