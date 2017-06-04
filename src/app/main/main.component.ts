import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {
  
  }

  ngOnInit(): void {
    console.log('init');
  }

  goRobotCreation() {
    let link = ['/robotCreation'];
    this.router.navigate(link);
  }

  llistarRobots() {
    let link = ['/robotList'];
    this.router.navigate(link);
  }

  getRobot() {
    let link = ['/robotGet',''];
    this.router.navigate(link);
  }

}
