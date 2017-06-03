import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
  
import { Unity } from 'app/unity';

import { RobotService } from 'app/robot.service';

@Component({
  selector: 'app-unities-list',
  templateUrl: './unities-list.component.html',
  styleUrls: ['./unities-list.component.css']
})
export class UnitiesListComponent implements OnInit {

  idRobot: string = '590ce4f99fd6656339e7b701';

  modelUnities: Unity[];

  modelUnity: Unity;

  constructor(private robotService: RobotService,
              private location: Location) { }

  ngOnInit() {
    
    this.robotService.getUnities().subscribe(res => this.modelUnities = res);

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

    this.robotService.removeUnity(this.idRobot, unity.concept).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelUnity = x;
              },
        e => console.log('onError: %s', e),
        () => {
              console.log('onCompleted')
              this.robotService.getUnities().subscribe(res => this.modelUnities = res)
              });

  }

}
