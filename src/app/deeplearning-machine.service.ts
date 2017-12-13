import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DeeplearningMachineService {

  //private url = 'http://localhost:8080/how-do-you-learn/api/howdyl/';
  private url = 'https://davidmartinezros.com:8443/deeplearning-machine-1.1.0-SNAPSHOT/api/dl/';
  
  private trainLMUrl = this.url + 'trainLM';
  private executeLMUrl = this.url + 'executeLM';

  private agent = "newagent-a2a18";
  private clientAccessToken = "fe78608943194cd6852d149438888db5";
  private developAccessToken = "08614129f36a494d86e28edf53f44594";
  private url2 = "https://dialogflow.googleapis.com/v2beta1/projects/" + this.agent + "/agent";

  constructor(private http: Http) { }

  getAgent() {
    let headers = new Headers(
      { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Authorization': this.clientAccessToken
      }); // ... Set content type to JSON
      let options = new RequestOptions({ headers: headers }); // Create a request option
      // ...using get request
      return this.http.get(this.url2, options)
        // ...and calling .json() on the response to return data
        .map((res:Response) => res.text())
        // ... do 3 tries
        .retry(3)
        //...errors if any
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
  }

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
