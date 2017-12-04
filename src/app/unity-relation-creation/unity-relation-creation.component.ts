import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { User } from 'app/user';

import { UnityRelationWrapper } from 'app/unity-relation-wrapper';

import { HowDoYouLearnService } from 'app/how-do-you-learn.service';

import { SessionService } from 'app/session.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-unity-relation-creation',
  templateUrl: './unity-relation-creation.component.html',
  styleUrls: ['./unity-relation-creation.component.css']
})
export class UnityRelationCreationComponent implements OnInit {

  concept: string;
  image: string;
  description: string;

  modelUser: User;

  modelRobot: Robot;

  modelUnity: Unity;

  modelRelationUnity: Unity;

  constructor(private route: ActivatedRoute,
              private robotService: HowDoYouLearnService,
              private location: Location,
              private sessionService: SessionService) { }

  ngOnInit() {

    this.modelUser = this.sessionService.getUser();

    console.log(this.modelUser);
    
    this.route.params.forEach((params: Params) => {
        let idRobot = params['id_robot'];
        console.log(name);
        this.robotService.getRobot(this.modelUser.id, idRobot)
          .subscribe(
            x => {
              console.log('onNext: %s', x);
              this.modelRobot = x;
            },
            e => console.log('onError: %s', e),
            () => {
              console.log('onCompleted')
              let idUnity = params['id_unity'];
              this.robotService.getUnity(this.modelUser.id, this.modelRobot.id, idUnity).subscribe(res => this.modelUnity = res)
            });
    });
  }

  onSubmit() {

    console.log(this.modelRobot);
    
    console.log(this.modelUnity);

    let unityRelation = new UnityRelationWrapper(this.modelUser.id, this.modelRobot.id, this.modelUnity.id, new Unity(null, this.concept, this.image, this.description));

    console.log(unityRelation);

    this.robotService.createRelation(unityRelation).subscribe(res => this.modelRelationUnity = res);
    
  }

  goBack(): void {

      this.location.back();
  
  }

}
