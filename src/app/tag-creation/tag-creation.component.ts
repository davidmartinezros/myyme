import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { Tag } from 'app/tag';

import { User } from 'app/user';

import { TagWrapper } from 'app/tag-wrapper';

import { RobotService } from 'app/robot.service';

import { SessionService } from 'app/session.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css']
})
export class TagCreationComponent implements OnInit {

  modelUser: User;

  modelRobot: Robot;

  modelUnity: Unity;

  modelTag: Tag;

  tag: string;

  constructor(private route: ActivatedRoute,
              private robotService: RobotService,
              private location: Location,
              private sessionService: SessionService) { }

  ngOnInit() {

    this.modelUser = this.sessionService.getUser();

    console.log(this.modelUser);
    
    this.route.params.forEach((params: Params) => {
        let idRobot = params['id_robot'];
        console.log(idRobot);
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

    let tagWrapper = new TagWrapper(this.modelUser.id, this.modelRobot.id, this.modelUnity.id, new Tag(null, this.tag));

    console.log(tagWrapper);

    this.robotService.createTag(tagWrapper).subscribe(res => this.modelTag = res);

  }

  goBack(): void {

      this.location.back();
  
  }

}
