import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import { Robot } from './robot';

import { Unity } from './unity';

import { Tag } from './tag';

import { User } from './user';

@Injectable()
export class RobotService {
    
    private url = 'http://localhost:8080/how-do-you-learn/api/howdyl/';
    //private url = 'http://davidmartinezros.com:8080/how-do-you-learn-SB-2.8.0-SNAPSHOT/api/howdyl/';

    private listUnitiesUrl = this.url + 'listUnities';
    private addUnityUrl = this.url + 'createUnity';
    private getUnityByConceptUrl = this.url + 'unityByConcept';
    private getUnityUrl = this.url + 'unity';
    private removeUnityUrl = this.url + 'removeUnity';
    private listRobotsUrl = this.url + 'listRobots';
    private addRobotUrl = this.url + 'createRobot';
    private getRobotByNameUrl = this.url + 'robotByName';
    private getRobotUrl = this.url + 'robot';
    private removeRobotUrl = this.url + 'removeRobot';
    private addTagUrl = this.url + 'createTag';
    private removeTagUrl = this.url + 'removeTag';
    private addUnityRelationUrl = this.url + 'createRelation';
    private validateUserUrl = this.url + 'validateUser';
    private addUserUrl = this.url + 'createUser';
    private getUserUrl = this.url + 'user';
    private getUserByNickUrl = this.url + 'userByNick';
    private removeUserUrl = this.url + 'removeUser';

    constructor(private http: Http) { }

    validateUser(body: Object) : Observable<User>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.post(this.validateUserUrl, body, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json()) 
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Fetch all existing robot
    getUserByNick(nick: string) : Observable<Robot>{
         // ...using get request
         return this.http.get(this.getUserByNickUrl + "/" + nick)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    getUser(idUser: string) : Observable<User>{
       // ...using get request
         return this.http.get(this.getUserUrl + "/" + idUser)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Add a new robot
    createUser (body: Object): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.post(this.addUserUrl, body, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json()) 
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Remove an existing robot
    removeUser (idUser: string): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.get(this.removeUserUrl + "?id_user=" + idUser, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json()) 
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all existing robot
    getRobots(idUser: string) : Observable<Robot[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

         // ...using get request
         return this.http.get(this.listRobotsUrl + "?id_user=" + idUser, options)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Fetch all existing robot
    getRobotByName(name: string) : Observable<Robot>{
         // ...using get request
         return this.http.get(this.getRobotByNameUrl + "/" + name)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Fetch all existing robot
    getRobot(idRobot: string) : Observable<Robot>{
         // ...using get request
         return this.http.get(this.getRobotUrl + "/" + idRobot)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Add a new robot
    createRobot (body: Object): Observable<Robot> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.post(this.addRobotUrl, body, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json()) 
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Remove an existing robot
    removeRobot (idRobot: string): Observable<Robot> {
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.get(this.removeRobotUrl + "?id_robot=" + idRobot, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json()) 
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Fetch all existing unities
    getUnities(idRobot: string) : Observable<Unity[]>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

         // ...using get request
         return this.http.get(this.listUnitiesUrl + "/" + idRobot, options)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Fetch all existing robot
    getUnityByConcept(idRobot: string, concept: string) : Observable<Unity>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

         // ...using get request
         return this.http.get(this.getUnityByConceptUrl + "/" + idRobot + "/" + concept, options)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Fetch all existing robot
    getUnity(idRobot: string, idUnity: string) : Observable<Unity>{
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

         // ...using get request
         return this.http.get(this.getUnityUrl + "/" + idRobot + "/" + idUnity, options)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

    // Add a new unity
    createUnity (body: Object): Observable<Unity> {
        let headers = new Headers( { 'Content-Type': 'application/json' } ); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.post(this.addUnityUrl, body, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Remove an existing unity
    removeUnity (idUnity: string): Observable<Unity> {
        let headers = new Headers( { 'Content-Type': 'application/json' } ); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.get(this.removeUnityUrl + "?id_unity=" + idUnity, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Add a new unity
    createTag (body: Object): Observable<Tag> {
        let headers = new Headers( { 'Content-Type': 'application/json' } ); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.post(this.addTagUrl, body, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Remove an existing tag
    removeTag (idTag: string): Observable<Tag> {
        let headers = new Headers( { 'Content-Type': 'application/json' } ); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.get(this.removeTagUrl + "?id_tag=" + idTag, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Add a new unity
    createRelation (body: Object): Observable<Unity> {
        let headers = new Headers( { 'Content-Type': 'application/json' } ); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        // ...using post request
        return this.http.post(this.addUnityRelationUrl, body, options)
                // ...and calling .json() on the response to return data
                .map((res:Response) => res.json())
                // ... do 3 tries
                .retry(3)
                //...errors if any
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
