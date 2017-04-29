import { Component, OnInit } from '@angular/core';
import { LearnAUnity } from './learn-a-unity';
import { UnityKnowledgeString } from './unity-knowledge';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app works!';

  web: Promise<any>;

  constructor(private learnAUnity: LearnAUnity<UnityKnowledgeString,UnityKnowledgeString>) {
  
  }

  ngOnInit(): void {

    this.learnAUnity.readWebPage('http://davidnez.wordpress.com/2017/04/03/la-belleza-se-intenta/')
        .then(web => this.web = web);
  
    /*
    var data = this.web.data,
    status = this.web.status,
    header = this.web.header,
    config = this.web.config;
    */

    console.log(this.web);

  }

}
