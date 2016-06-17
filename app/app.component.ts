import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html'
})

export class AppComponent {
	
	holamundo: string;
	otrotexto: string;
	otrotextomas: string;

	constructor(){
		this.holamundo = 'Hola Mundo';
		this.otrotexto = 'Otro texto';
		this.otrotextomas = 'Otro texto más.';
	}
}