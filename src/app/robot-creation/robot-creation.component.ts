import { Component, OnInit, Input } from '@angular/core';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { UnityWrapper } from 'app/unity-wrapper';

import { RobotService } from 'app/robot.service';

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

  modelRobots: Robot[];

  modelRobot: Robot;

  modelUnities: Unity[];

  modelUnity: Unity;

  constructor(private robotService: RobotService) { }

  ngOnInit() {
  }

  professions = ['Engineer', 'Doctor', 'Fisic', 'Quimic'];

  onSubmit() {
    //this.model = new Robot("David", 38, this.professions[0], "The most intelligent in the World");
    let robot = new Robot(null, this.name, this.age, this.profession, this.description);
    
    //console.log(JSON.stringify(this.model));

    this.robotService.createRobot(robot).subscribe(res => this.modelRobot = res);

    this.robotService.getRobots().subscribe(res => this.modelRobots = res);
    
  }

  onSubmitUnity() {

    let unity = new UnityWrapper(this.modelRobot.id, new Unity(null, 'prova', null, 'prova descripcio'));

    console.log(unity);

    this.robotService.createUnity(unity).subscribe(res => this.modelUnity = res);

    this.robotService.getUnities().subscribe(res => this.modelUnities = res);
    
  }

  // TODO: Remove this when we're done
  get robot() { return JSON.stringify(this.modelRobot); }

}
