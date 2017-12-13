import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { User } from 'app/user';

import { FileGeneratorService } from 'app/file-generator.service';

import { SessionService } from 'app/session.service';

@Component({
  selector: 'app-learn-theme',
  templateUrl: './learn-theme.component.html',
  styleUrls: ['./learn-theme.component.css']
})
export class LearnThemeComponent implements OnInit {

  theme: String;
  phrase: String;

  result: String;

  modelUser: User;
  
  constructor(private location: Location,
    private sessionService: SessionService,
    private fileGeneratorService: FileGeneratorService) { }

  ngOnInit() {
  }

  onSubmit() {
    
    console.log(this.theme);
    console.log(this.phrase);

    this.fileGeneratorService.constructPhrase(this.theme, this.phrase).subscribe(res => this.result = res);

  }

  goBack(): void {

      this.location.back();

  }

}
