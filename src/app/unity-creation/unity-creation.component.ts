import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { UnityWrapper } from 'app/unity-wrapper';

import { RobotService } from 'app/robot.service';

import { Location } from '@angular/common';

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

  constructor(private route: ActivatedRoute,
              private robotService: RobotService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        let nameRobot = params['name_robot'];
        console.log(nameRobot);
        this.robotService.getRobot(nameRobot)
                .subscribe(res => this.modelRobot = res);
    });
  }

  onSubmit() {

    let unity = new UnityWrapper(this.modelRobot.id, new Unity(null, this.concept, this.image, this.description));

    console.log(unity);

    this.robotService.createUnity(unity).subscribe(res => this.modelUnity = res);
    
  }

  goBack(): void {

      this.location.back();
  
  }

}
