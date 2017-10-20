import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { Robot } from 'app/robot';

import { RobotWrapper } from 'app/robot-wrapper';

import { Unity } from 'app/unity';

import { User } from 'app/user';

import { RobotService } from 'app/robot.service';

import { SessionService } from 'app/session.service';

@Component({
  selector: 'app-robot-creation',
  templateUrl: './robot-creation.component.html',
  styleUrls: ['./robot-creation.component.css']
})
export class RobotCreationComponent implements OnInit {

  name: string;
  age: number;
  profession: string;
  description: string;

  modelUser: User;

  modelRobot: Robot;

  //modelUnities: Unity[];

  //modelUnity: Unity;

  constructor(
    private robotService: RobotService,
    private location: Location,
    private sessionService: SessionService) { }

  ngOnInit() {
    this.modelUser = this.sessionService.getUser();
  }

  professions = ['Engineer', 'Doctor', 'Fisic', 'Quimic'];

  onSubmit() {

    let robotWrapper = new RobotWrapper(this.modelUser.id, new Robot(null, this.name, this.age, this.profession, this.description));
    
    //console.log(JSON.stringify(this.model));

    this.robotService.createRobot(robotWrapper).subscribe(res => this.modelRobot = res);

    ///this.robotService.getRobots().subscribe(res => this.modelRobots = res);
    
  }

  goBack(): void {
      this.location.back();
  }

  // TODO: Remove this when we're done
  get robot() { return JSON.stringify(this.modelRobot); }

}
