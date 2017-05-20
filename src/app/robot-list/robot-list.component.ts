import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Robot } from 'app/robot';

import { RobotService } from 'app/robot.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})
export class RobotListComponent implements OnInit {

  modelRobots: Robot[];

  constructor(private robotService: RobotService,
              private router: Router) { }

  ngOnInit() {

    this.robotService.getRobots().subscribe(res => this.modelRobots = res);
    
  }

  /*onSubmit() {

    //this.robotService.getRobots().subscribe(res => this.modelRobots = res);

  }*/

  gotoCreateUnity(robot: Robot) {

    let link = ['/unityCreation', robot.name];
    this.router.navigate(link);

  }

}
