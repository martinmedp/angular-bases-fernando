import { Component } from "@angular/core";

//Este decorador importado de @angular/core
//la convierte en un componente
@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter}}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="reset(10)">Reset</button>
        <button (click)="decreaseBy(1)">-1</button>

    `
})

//un componente es una simple clase que no tiene
//nada de raro
export class counterComponent {
    constructor(){}
    counter= 10;

    increaseBy(value:number): void {
    this.counter +=value;
    }

    decreaseBy(value:number): void {
    this.counter -=value;
    }

    reset(value:number): void {
    this.counter =value;
    }

}
