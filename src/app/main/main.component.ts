import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { User } from '../user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  modelUser: User;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) {
  
  }

  ngOnInit(): void {
    console.log('init');

    this.modelUser = this.sessionService.getUser();
  
  }

  goRobotCreation() {
    let link = ['/robotCreation', this.modelUser.id];
    this.router.navigate(link);
  }

  llistarRobots() {
    let link = ['/robotList', this.modelUser.id];
    this.router.navigate(link);
  }

  learnTheme() {
    let link = ['/learnTheme', this.modelUser.id];
    this.router.navigate(link);
  }
  
  executeLM() {
    let link = ['/executeLM', this.modelUser.id];
    this.router.navigate(link);
  }

  trainLM() {
    let link = ['/trainLM', this.modelUser.id];
    this.router.navigate(link);
  }

  getRobot() {
    let link = ['/robotGet',''];
    this.router.navigate(link);
  }

}
