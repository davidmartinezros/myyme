import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() {
  
  }

  ngOnInit(): void {
    console.log('init');
  }

}
