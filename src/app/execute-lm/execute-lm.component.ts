import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { User } from 'app/user';

import { DeeplearningMachineService } from 'app/deeplearning-machine.service';

import { SessionService } from 'app/session.service';

@Component({
  selector: 'app-execute-lm',
  templateUrl: './execute-lm.component.html',
  styleUrls: ['./execute-lm.component.css']
})
export class ExecuteLmComponent implements OnInit {

  theme: String;
  word: String;

  result: String[];

  modelUser: User;
  
  constructor(private location: Location,
    private sessionService: SessionService,
    private deeplearningMachineService: DeeplearningMachineService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    this.deeplearningMachineService.executeLM(this.theme, this.word).subscribe(res => {this.result = res; console.log(this.result);});

  }

  goBack(): void {

      this.location.back();

  }
  
}
