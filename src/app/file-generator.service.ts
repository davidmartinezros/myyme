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
    constructPhrase(theme: string, phrase: string) : Observable<String>{
          // ...using get request
          return this.http.get(this.constructPhraseUrl + "?theme=" + theme + "&phrase=" + phrase)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            // ... do 3 tries
            .retry(3)
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }

}
