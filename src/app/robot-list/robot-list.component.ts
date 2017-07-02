import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Robot } from 'app/robot';
import { User } from 'app/user';

import { RobotService } from 'app/robot.service';
import { SessionService } from 'app/session.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})
export class RobotListComponent implements OnInit {

  modelUser: User;

  modelRobot: Robot;

  modelRobots: Robot[];

  constructor(private robotService: RobotService,
              private router: Router,
              private location: Location,
              private sessionService: SessionService) { }

  ngOnInit() {

    this.modelUser = this.sessionService.getUser();

    console.log(this.modelUser);

    this.robotService.getRobots(this.modelUser.id).subscribe(res => this.modelRobots = res);
    
  }

  goBack(): void {

      this.location.back();
  
  }

  confirmRemoveRobot(robot: Robot) {

    robot.confirmRobot = true;

  }

  cancelRemoveRobot(robot: Robot) {
    
    robot.confirmRobot = false;
    
  }

  removeRobot(robot: Robot) {

    console.log(robot.id);

    this.robotService.removeRobot(robot.id).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelRobot = x;
              },
        e => console.log('onError: %s', e),
        () => {
              console.log('onCompleted')
              this.robotService.getRobots(this.modelUser.id).subscribe(res => this.modelRobots = res)
              });

  }

  gotoRobotGet(robot: Robot) {

    let link = ['/robotGet', robot.name];
    this.router.navigate(link);

  }

  gotoUnitiesList(robot: Robot) {
    
    let link = ['/unitiesList', robot.id];
    this.router.navigate(link);

  }

}
