import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';

import { Robot } from 'app/robot';

import { Unity } from 'app/unity';

import { TagWrapper } from 'app/tag-wrapper';

import { RobotService } from 'app/robot.service';

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
              private robotService: RobotService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
        let name = params['name'];
        console.log(name);
        this.robotService.getRobot(name)
                .subscribe(res => this.modelRobot = res);
        let concept = params['concept']
        console.log(concept);
        this.robotService.getUnity(concept)
                .subscribe(res => this.modelUnity = res);
    });
  }

  onSubmit() {

    let tag = new TagWrapper(this.modelRobot.id, this.modelUnity.concept, this.tag);

    console.log(tag);

    this.robotService.createTag(tag).subscribe(res => this.modelUnity = res);

  }

}
