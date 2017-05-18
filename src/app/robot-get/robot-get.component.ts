import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { RobotService } from '../robot.service';

import { Robot } from '../robot';

@Component({
  selector: 'app-robot-get',
  templateUrl: './robot-get.component.html',
  styleUrls: ['./robot-get.component.css']
})
export class RobotGetComponent implements OnInit {

  modelRobot: Robot;

  constructor(private robotService: RobotService,
        private route: ActivatedRoute,) { }

  ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let name = params['name'];
            this.robotService.getRobot(name)
                .subscribe(res => this.modelRobot = res);
        });
    }

}
