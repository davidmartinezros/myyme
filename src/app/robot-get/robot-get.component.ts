import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import { RobotService } from '../robot.service';

import { Robot } from '../robot';

@Component({
  selector: 'app-robot-get',
  templateUrl: './robot-get.component.html',
  styleUrls: ['./robot-get.component.css']
})
export class RobotGetComponent implements OnInit {

    modelRobot: Robot;

    name: string;

    constructor(private robotService: RobotService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            this.name = params['name'];
            if(this.name != '') {
                this.robotService.getRobot(this.name)
                    .subscribe(res => this.modelRobot = res);
            }
        });

    }

    searchRobot() {
        console.log(this.name);
        if(this.name != '') {
            this.robotService.getRobot(this.name)
                    .subscribe(res => this.modelRobot = res);
        }

    }

    goBack() {
        this.location.back();
    }

}
