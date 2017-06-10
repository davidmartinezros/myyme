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

    nameRobot: string;

    constructor(private robotService: RobotService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit(): void {

        this.route.params.forEach((params: Params) => {
            this.nameRobot = params['name_robot'];
            if(this.nameRobot != '') {
                this.robotService.getRobotByName(this.nameRobot)
                    .subscribe(res => this.modelRobot = res);
            }
        });

    }

    searchRobot() {
        console.log(this.nameRobot);
        if(this.nameRobot != '') {
            this.robotService.getRobot(this.nameRobot)
                    .subscribe(res => this.modelRobot = res);
        }

    }

    goBack() {
        this.location.back();
    }

}
