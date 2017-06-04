import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Unity } from '../unity';

import { Robot } from '../robot';

import { RobotService } from 'app/robot.service';

@Component({
  selector: 'app-print-unities',
  templateUrl: './print-unities.component.html',
  styleUrls: ['./print-unities.component.css']
})
export class PrintUnitiesComponent implements OnInit {

  @Input() modelRobot: Robot;

  @Input() modelUnities: Unity[];

  modelUnity: Unity;
  
  constructor(private router: Router,
    private robotService: RobotService) { }

  ngOnInit() {

  }

  gotoCreateUnity() {

    console.log(this.modelRobot);
    
    let link = ['/unityCreation', this.modelRobot.name];
    this.router.navigate(link);

  }

  gotoCreateTag(unity: Unity) {

    console.log(this.modelRobot);

    console.log(unity);
    
    let link = ['/tagCreation', this.modelRobot.name, unity.concept];
    this.router.navigate(link);

  }

  confirmRemoveUnity(unity: Unity) {

    unity.confirmUnity = true;
  }

  cancelRemoveUnity(unity: Unity) {
    
    unity.confirmUnity = false;

  }

  removeUnity(unity: Unity) {

    console.log(unity.concept);

    this.robotService.removeUnity(this.modelRobot.id, unity.concept).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelUnity = x;
              },
        e => console.log('onError: %s', e),
        () => {
              console.log('onCompleted')
              this.robotService.getUnities(this.modelRobot.id).subscribe(res => this.modelUnities = res)
              });

  }

}
