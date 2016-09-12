import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import {Car} from '../../app/Cars/Car';

@Injectable()
export class CarService
{
    constructor(private http:Http){}

       private carsurl = 'app/resources/data/cars-medium.json';

 

    getCarsMedium()
    {
        return this.http.get('app/resources/data/cars-medium.json')
        .toPromise()
        .then(res=><Car[]> res.json().data)
        .then(data=>{return data;});
    }

getCars (): Observable<Car[]> 
  {
    return this.http.get(this.carsurl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res:Response)
  {
     let body = res.json();
     return body.Data || { };

  }

  private handleError(error : any)
  {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}