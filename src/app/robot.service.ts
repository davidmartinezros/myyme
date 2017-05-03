import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Robot } from './robot';

@Injectable()
export class RobotService {
    
    private listRobotsUrl = 'http://davidmartinezros.com:8080/how-do-you-learn-SB-2.0.0-SNAPSHOT/api/howdyl/list';
    private addRobotUrl = 'http://davidmartinezros.com:8080/how-do-you-learn-SB-2.0.0-SNAPSHOT/api/howdyl/addUnity';

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
    addRobot (body: Object): Observable<Comment[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.addRobotUrl, body, options) // ...using post request
                .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

}