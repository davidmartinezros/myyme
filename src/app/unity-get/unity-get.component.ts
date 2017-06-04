import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params }   from '@angular/router';

import { RobotService } from '../robot.service';

import { Unity } from '../unity';

@Component({
  selector: 'app-unity-get',
  templateUrl: './unity-get.component.html',
  styleUrls: ['./unity-get.component.css']
})
export class UnityGetComponent implements OnInit {

  modelUnity: Unity;

  concept: string;

  constructor(private robotService: RobotService,
        private route: ActivatedRoute,
        private location: Location) { }

  ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.concept = params['concept'];
            if(this.concept != '') {
                this.robotService.getUnity('AAA', this.concept)
                    .subscribe(res => this.modelUnity = res);
            }
        });
    }

    searchUnity() {
        console.log(this.concept);
        if(this.concept != '') {
            this.robotService.getUnity('AAA', this.concept)
                    .subscribe(res => this.modelUnity = res);
        }

    }

    goBack() {
        this.location.back();
    }

}
