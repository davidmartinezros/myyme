import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params }   from '@angular/router';

import { RobotService } from 'app/robot.service';

import { SessionService } from 'app/session.service';

import { Unity } from 'app/unity';

import { User } from 'app/user';

@Component({
  selector: 'app-unity-get',
  templateUrl: './unity-get.component.html',
  styleUrls: ['./unity-get.component.css']
})
export class UnityGetComponent implements OnInit {

  modelUnity: Unity;

  modelUser: User;

  concept: string;

    constructor(private robotService: RobotService,
        private route: ActivatedRoute,
        private location: Location,
        private sessionService: SessionService) { }

    ngOnInit(): void {

        this.modelUser = this.sessionService.getUser();
        
        console.log(this.modelUser);
        
        this.route.params.forEach((params: Params) => {
            this.concept = params['concept'];
            if(this.concept != '') {
                this.robotService.getUnity(this.modelUser.id, 'AAA', this.concept)
                    .subscribe(res => this.modelUnity = res);
            }
        });
    }

    searchUnity() {
        console.log(this.concept);
        if(this.concept != '') {
            this.robotService.getUnity(this.modelUser.id, 'AAA', this.concept)
                    .subscribe(res => this.modelUnity = res);
        }

    }

    goBack() {
        this.location.back();
    }

}
