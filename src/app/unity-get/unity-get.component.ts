import { Component, OnInit } from '@angular/core';

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

  constructor(private robotService: RobotService,
        private route: ActivatedRoute) { }

  ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let concept = params['concept'];
            this.robotService.getUnity(concept)
                .subscribe(res => this.modelUnity = res);
        });
    }

}
