import { Component, OnInit, Input } from '@angular/core';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { UnityWrapper } from 'app/unity-wrapper';

import { RobotService } from 'app/robot.service';

@Component({
  selector: 'app-unity-creation',
  templateUrl: './unity-creation.component.html',
  styleUrls: ['./unity-creation.component.css']
})
export class UnityCreationComponent implements OnInit {

  concept: string;
  image: string;
  description: string;

  @Input() modelRobot: Robot;

  modelUnity: Unity;

  constructor(private robotService: RobotService) { }

  ngOnInit() {
  }

  onSubmit() {

    let unity = new UnityWrapper(this.modelRobot.id, new Unity(null, this.concept, this.image, this.description));

    console.log(unity);

    this.robotService.createUnity(unity).subscribe(res => this.modelUnity = res);
    
  }

}
