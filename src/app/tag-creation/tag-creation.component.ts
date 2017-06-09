import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { Tag } from 'app/tag';

import { TagWrapper } from 'app/tag-wrapper';

import { RobotService } from 'app/robot.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-tag-creation',
  templateUrl: './tag-creation.component.html',
  styleUrls: ['./tag-creation.component.css']
})
export class TagCreationComponent implements OnInit {

  @Input() modelRobot: Robot;

  @Input() modelUnity: Unity;

  tag: string;

  constructor(private route: ActivatedRoute,
              private robotService: RobotService,
              private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        let name = params['name'];
        console.log(name);
        this.robotService.getRobot(name)
          .subscribe(
            x => {
              console.log('onNext: %s', x);
              this.modelRobot = x;
            },
            e => console.log('onError: %s', e),
            () => {
              console.log('onCompleted')
              let concept = params['concept'];
              this.robotService.getUnity(this.modelRobot.id, concept).subscribe(res => this.modelUnity = res)
            });
    });
  }

  onSubmit() {

    let tagWrapper = new TagWrapper(this.modelRobot.id, this.modelUnity.concept, new Tag(null, this.tag));

    console.log(tagWrapper);

    this.robotService.createTag(tagWrapper).subscribe(res => this.modelUnity = res);

  }

  goBack(): void {

      this.location.back();
  
  }

}
