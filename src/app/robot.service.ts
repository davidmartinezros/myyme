import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Robot } from './robot';

import { Unity } from './unity';

@Injectable()
export class RobotService {
    
    private server = 'http://localhost:8080/how-do-you-learn/';
    //private server = 'http://davidmartinezros.com:8080/how-do-you-learn-SB-2.1.0-SNAPSHOT/';

    private listUnitiesUrl = this.server + 'api/howdyl/listUnities';
    private addUnityUrl = this.server + 'api/howdyl/addUnity';
    private listRobotsUrl = this.server + 'api/howdyl/listRobots';
    private addRobotUrl = this.server + 'api/howdyl/addRobot';

    constructor(private http: Http) { }

    // Fetch all existing robot
    getRobots() : Observable<Robot[]>{
         // ...using get request
         return this.http.get(this.listRobotsUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Add a new robot
    addRobot (body: Object): Observable<Robot> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.addRobotUrl, body, options) // ...using post request
                .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    // Fetch all existing unities
    getUnities() : Observable<Unity[]>{
         // ...using get request
         return this.http.get(this.listUnitiesUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Add a new unity
    addUnity (body: Object): Observable<Unity> {
        let bodyString = JSON.stringify(body); // Stringify payload
        console.log(bodyString);
        let headers = new Headers( { 'Content-Type': 'application/json' } ); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.addUnityUrl, body, options) // ...using post request
                .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

}