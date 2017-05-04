import { Component, OnInit, Input } from '@angular/core';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

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

  modelUnities: Unity[];

  modelUnity: Unity;

  constructor(private robotService: RobotService) { }

  ngOnInit() {
  }

  professions = ['Engineer', 'Doctor', 'Fisic', 'Quimic'];

  model: Robot;

  submitted = false;

  onSubmit() {
    this.submitted = true;
    //this.model = new Robot("David", 38, this.professions[0], "The most intelligent in the World");
    this.model = new Robot(this.name, this.age, this.profession, this.description);
    
    //console.log(JSON.stringify(this.model));

    this.robotService.getUnities().subscribe(res => this.modelUnities = res);
    
    this.robotService.addUnity(new Unity('prova', '', 'prova descripcio')).subscribe(res => this.modelUnity = res);
    
  }

  // TODO: Remove this when we're done
  get robot() { return JSON.stringify(this.model); }

}
