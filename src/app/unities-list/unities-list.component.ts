import { Component, OnInit } from '@angular/core';

import { Unity } from 'app/unity';

import { RobotService } from 'app/robot.service';

@Component({
  selector: 'app-unities-list',
  templateUrl: './unities-list.component.html',
  styleUrls: ['./unities-list.component.css']
})
export class UnitiesListComponent implements OnInit {

  modelUnities: Unity[];

  constructor(private robotService: RobotService) { }

  ngOnInit() {
    
    this.robotService.getUnities().subscribe(res => this.modelUnities = res);

  }

}
