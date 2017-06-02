import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Robot } from 'app/robot';

import { RobotService } from 'app/robot.service';

@Component({
  selector: 'app-robot-list',
  templateUrl: './robot-list.component.html',
  styleUrls: ['./robot-list.component.css']
})
export class RobotListComponent implements OnInit {

  modelRobot: Robot;

  modelRobots: Robot[];

  constructor(private robotService: RobotService,
              private router: Router,
              private location: Location) { }

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

  goBack(): void {

      this.location.back();
  
  }

  removeRobot(robot: Robot) {

    console.log(robot.name);

    //let removeRobot: RemoveRobot = new RemoveRobot(robot.name);

    //this.robotService.removeRobot(robot.name).subscribe(res => this.modelRobot = res);

    this.robotService.removeRobot(robot.name).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelRobot = x;
              },
        e => console.log('onError: %s', e),
        () => {
              console.log('onCompleted')
              this.robotService.getRobots().subscribe(res => this.modelRobots = res)
              });

  }

}
