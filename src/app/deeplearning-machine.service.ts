import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DeeplearningMachineService {

  //private url = 'http://localhost:8080/how-do-you-learn/api/howdyl/';
  private url = 'https://davidmartinezros.com:8443/deeplearning-machine-1.1.0-SNAPSHOT/api/dl/';
  
  private trainLMUrl = this.url + 'trainLM';
  private executeLMUrl = this.url + 'executeLM';

  constructor(private http: Http) { }

  // train LM
  trainLM(theme: String, word: String) : Observable<String[]>{
    let headers = new Headers(
    { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
    }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    // ...using get request
    return this.http.get(this.trainLMUrl + "?theme=" + theme + "&word=" + word, options)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.text())
      // ... do 3 tries
      .retry(3)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      
  }

  // execute LM
  executeLM(theme: String, word: String) : Observable<String[]>{
    let headers = new Headers(
    { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
    }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    // ...using get request
    return this.http.get(this.executeLMUrl + "?theme=" + theme + "&word=" + word, options)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.text())
      // ... do 3 tries
      .retry(3)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  
}

}
