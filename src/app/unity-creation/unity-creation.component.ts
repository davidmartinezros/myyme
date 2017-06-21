import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { User } from 'app/user';

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

  modelUser: User;

  modelRobot: Robot;

  modelUnity: Unity;

  constructor(private route: ActivatedRoute,
              private robotService: RobotService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        let idRobot = params['id_robot'];
        console.log(idRobot);
        this.robotService.getRobot(idRobot)
                .subscribe(res => this.modelRobot = res);
    });
  }

  onSubmit() {

    let unity = new UnityWrapper(this.modelUser.id, this.modelRobot.id, new Unity(null, this.concept, this.image, this.description));

    console.log(unity);

    this.robotService.createUnity(unity).subscribe(res => this.modelUnity = res);
    
  }

  goBack(): void {

      this.location.back();
  
  }

}
