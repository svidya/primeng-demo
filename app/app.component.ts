import { Component } from '@angular/core';
import {InputText,DataTable,Button,Dialog,Column,Header,Footer} from 'primeng/primeng';
import {Car} from './cars/car';
import {CarService} from './cars/carservice';

import './rxjs-operators';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers:[CarService]
})
export class AppComponent { 

    diplayDialogue : boolean;
    car:Car = new PrimeCar();
    selectedCar : Car;
    newCar:boolean;
    cars:Car[];
    errorMessage:string;

    constructor(private carservice:CarService)
    {

    }

    ngOnInit()
    {
        this.carservice.getCars()
                        .subscribe(cars=> this.cars = cars,error=>this.errorMessage = <any>error);
                        
                        
    }
    
}

class PrimeCar implements Car {

    constructor(public vin?:string, public year?:string, public brand?:string, public color?:string) {}
}
