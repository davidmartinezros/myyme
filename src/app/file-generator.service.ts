import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FileGeneratorService {
  
    //private url = 'http://localhost:8080/how-do-you-learn/api/howdyl/';
    private url = 'https://davidmartinezros.com:8443/file-generator-1.1.0-SNAPSHOT/api/fg/';
    
    private constructPhraseUrl = this.url + 'constructPhrase';

    constructor(private http: Http) { }

    // construct phrase
    constructPhrase(theme: String, phrase: String) : Observable<String>{
        let headers = new Headers(
        { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
        }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        // ...using get request
        console.log(this.constructPhraseUrl + "?theme=" + theme + "&phrase=" + phrase);
        return this.http.get(this.constructPhraseUrl + "?theme=" + theme + "&phrase=" + phrase, options)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.text())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

}
