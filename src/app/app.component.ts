import { Component, OnInit, HostListener } from '@angular/core';

import { HowDoYouLearnService } from './how-do-you-learn.service';

import { Robot } from './robot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  algo: string;

  modelRobot: Robot;

  constructor(private robotService: HowDoYouLearnService) {
    // Hem de carregar el robot que seleccioni lusuari
    this.robotService.getRobotByName("David")
                    .subscribe(res => this.modelRobot = res);
  }

  horizontal = {
    tamany:  function() { return window.innerWidth; },
    cursor:   function(event) { return event.clientX; },
  };
  vertikal = {
    tamany:  function() { return window.innerHeight; },
    cursor:   function(event) { return event.clientY; },
  };

  ngOnInit(): void {
    console.log('init');
  }

  koordinate(cursor, achse) {
    var tamany = achse.tamany();

    //console.log(Math.floor(100-(100*(1-achse.cursor(cursor)/tamany))));

    var valor = Math.floor(100-(100*(1-achse.cursor(cursor)/tamany)));
    
    return Math.min(70,valor);
    /*
    var tamanyUll = achse.tamany($ull) - achse.tamany($pupila);

    var abstand = achse.cursor(cursor) +
                  achse.position($pupila) -
                  achse.offset($pupila) -
                  achse.tamany($pupila)/2;
    
    return Math.max(0, Math.min(tamanyUll, abstand));
  */
  }

  @HostListener('mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    //console.log('move');
    var $pupila = document.getElementById('pupilaLinks');
    var $pupila2 = document.getElementById('pupilaLinks2');
    var $ull = document.getElementById('ullLinks');
    var $ull2 = document.getElementById('ullLinks2');
    $pupila.style.left = this.koordinate(event, this.horizontal) + '%',
    $pupila.style.top =  this.koordinate(event, this.vertikal) + '%';
    $pupila2.style.left = this.koordinate(event, this.horizontal) + '%',
    $pupila2.style.top =  this.koordinate(event, this.vertikal) + '%';
    //console.log('move_fi');
    //console.log($pupille.style.left);
    //console.log($pupille.style.top);
  }

  digamAlgo() {

    if(this.modelRobot) {

      this.modelRobot.queDiuElRobot += "\n" + this.algo;

    }

  }

}
