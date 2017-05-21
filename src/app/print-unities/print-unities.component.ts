import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Unity } from '../unity';

import { Robot } from '../robot';

@Component({
  selector: 'app-print-unities',
  templateUrl: './print-unities.component.html',
  styleUrls: ['./print-unities.component.css']
})
export class PrintUnitiesComponent implements OnInit {

  @Input() modelRobot: Robot;

  @Input() unities: Unity[];
  
  constructor(private router: Router) { }

  ngOnInit() {

  }

  gotoCreateUnity() {

    console.log(this.modelRobot);
    
    let link = ['/unityCreation', this.modelRobot.name];
    this.router.navigate(link);

  }

  gotoCreateTag(unity: Unity) {

    console.log(this.modelRobot);
    
    let link = ['/tagCreation', this.modelRobot.name, unity.concept];
    this.router.navigate(link);

  }

}
