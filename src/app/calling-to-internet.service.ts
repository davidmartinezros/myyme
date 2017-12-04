import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CallingToInternetService {

  //private url = 'http://localhost:8080/how-do-you-learn/api/howdyl/';
  private url = 'https://davidmartinezros.com:8443/calling-to-internet-1.2.0-SNAPSHOT/api/cti/';
  
  private getTagsFromGoogleUrl = this.url + 'getTagsFromGoogle';
  private getTagsOfContentUrlUrl = this.url + 'getTagsOfContentUrl';
  private getContentUrlUrl = this.url + 'getContentUrl';

  constructor(private http: Http) { }

  // getTagsFromGoogle
  getTagsFromGoogle(tags: string[]) : Observable<String>{
      let headers = new Headers(
      { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
      }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      let body = tags;
      // ...using get request
      return this.http.post(this.getTagsFromGoogleUrl, body, options)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.json())
        // ... do 3 tries
        .retry(3)
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      
  }

  getTagsOfContentUrl(url: string, tag: string) : Observable<String>{
    let headers = new Headers(
    { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
    }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let body = {
      url,
      tag
    };
    // ...using get request
    return this.http.post(this.getTagsOfContentUrlUrl, body, options)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      // ... do 3 tries
      .retry(3)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
  }
  
  getContentUrl(url: string) : Observable<String>{
    let headers = new Headers(
    { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
    }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    let body = url;
    // ...using get request
    return this.http.post(this.getContentUrlUrl, body, options)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      // ... do 3 tries
      .retry(3)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    
  }
}
