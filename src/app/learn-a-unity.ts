import { Injectable } from '@angular/core';
import { UnityKnowledge, UnityKnowledgeType, UnityKnowledgeTypeBase } from './unity-knowledge';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class LearnAUnity<T extends UnityKnowledgeType<K>, K extends UnityKnowledgeTypeBase> {

    private headers = new Headers({'Content-Type':'text/plain',
                                    'Access-Control-Allow-Origin':'*'});

    unities: UnityKnowledge<T,K>[];

    constructor(private http: Http) {

        this.unities = [];
    
    }

    readWebPage(url: string): Promise<any>  {
        
        console.log(this.http);
        console.log(url);
        return this.http.get(url)
            .map((res:Response) => res.status)
            .toPromise()
            .catch(this.handleError);

    }

    learn(concept:T) {
        
        var unity: UnityKnowledge<T,K> = new UnityKnowledge(concept, new HTMLImageElement());

        this.unities.push(unity);

    }

    private handleError(error: any): Promise<any> {
        
        console.error('An error occurred', error); // for demo purposes only
        
        return Promise.reject(error.message || error);
    
    }

}
