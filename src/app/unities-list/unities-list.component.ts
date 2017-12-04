import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params }   from '@angular/router';
  
import { Unity } from 'app/unity';

import { HowDoYouLearnService } from 'app/how-do-you-learn.service';

@Component({
  selector: 'app-unities-list',
  templateUrl: './unities-list.component.html',
  styleUrls: ['./unities-list.component.css']
})
export class UnitiesListComponent implements OnInit {

  idRobot: string;

  modelUnities: Unity[];

  modelUnity: Unity;

  constructor(private route: ActivatedRoute,
              private robotService: HowDoYouLearnService,
              private location: Location) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
        this.idRobot = params['id_robot'];
        console.log(this.idRobot);
        this.robotService.getUnities(this.idRobot)
          .subscribe(res => this.modelUnities = res);
    });

  }

  goBack(): void {

      this.location.back();
  
  }

  confirmRemoveUnity(unity: Unity) {

    unity.confirmUnity = true;
  }

  cancelRemoveUnity(unity: Unity) {
    
    unity.confirmUnity = false;

  }

  removeUnity(unity: Unity) {

    console.log(unity.concept);

    this.robotService.removeUnity(unity.id).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelUnity = x;
              },
        e => console.log('onError: %s', e),
        () => {
              console.log('onCompleted')
              this.robotService.getUnities(this.idRobot).subscribe(res => this.modelUnities = res)
              });

  }

}
