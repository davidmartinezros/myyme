import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { User } from 'app/user';

import { DeeplearningMachineService } from 'app/deeplearning-machine.service';

import { SessionService } from 'app/session.service';

@Component({
  selector: 'app-train-lm',
  templateUrl: './train-lm.component.html',
  styleUrls: ['./train-lm.component.css']
})
export class TrainLmComponent implements OnInit {

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
    
    this.deeplearningMachineService.trainLM(this.theme, this.word).subscribe(res => {this.result = res; console.log(this.result);});

  }

  goBack(): void {

      this.location.back();

  }
  
}
