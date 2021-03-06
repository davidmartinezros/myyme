import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Unity } from '../unity';

import { Robot } from '../robot';

import { Tag } from '../tag';

import { HowDoYouLearnService } from 'app/how-do-you-learn.service';

@Component({
  selector: 'app-print-unities',
  templateUrl: './print-unities.component.html',
  styleUrls: ['./print-unities.component.css']
})
export class PrintUnitiesComponent implements OnInit {

  @Input() modelRobot: Robot;

  @Input() modelUnity: Unity;

  @Input() unitiesFirstLevel: boolean;

  modelUnities: Unity[];

  modelTag: Tag;
  
  constructor(private router: Router,
    private robotService: HowDoYouLearnService) { }

  ngOnInit() {
    console.log(this.modelUnity);
    if(this.unitiesFirstLevel && this.modelUnity == null) {
      this.modelUnities = this.modelRobot.unities;
    } else {
      this.modelUnities = this.modelUnity.unities;
    }
  }

  gotoCreateUnity() {

    console.log(this.modelRobot);
    
    let link = ['/unityCreation', this.modelRobot.id];
    this.router.navigate(link);

  }

  gotoCreateUnityRelation(unity: Unity){

    console.log(this.modelRobot);

    console.log(unity);
    
    let link = ['/unityRelationCreation', this.modelRobot.id, unity.id];
    this.router.navigate(link);

  }

  gotoCreateTag(unity: Unity) {

    console.log(this.modelRobot);

    console.log(unity);
    
    let link = ['/tagCreation', this.modelRobot.id, unity.id];
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

    this.robotService.removeUnity(unity.id).subscribe(
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

  confirmRemoveTag(tag: Tag) {

    tag.confirmTag = true;

  }

  cancelRemoveTag(tag: Tag) {

    tag.confirmTag = false;
    
  }

  removeTag(unity: Unity, tag: Tag) {

    console.log(tag.tag);

    this.robotService.removeTag(tag.id).subscribe(
        x => {
              console.log('onNext: %s', x);
              this.modelTag = x;
              },
        e => console.log('onError: %s', e),
        () => {
              console.log('onCompleted')
              this.robotService.getUnities(this.modelRobot.id).subscribe(res => this.modelUnities = res)
              });

  }

}
