import { Component, OnInit, HostListener } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  horizontal = {
    groesse:  function($el) { return $el.clientWidth; },
    position: function($el) { return $el.clientLeft; },
    offset:   function($el) { return $el.offsetLeft; },
    cursor:   function(event) { return event.clientX; },
  };
  vertikal = {
    groesse:  function($el) { return $el.clientHeight; },
    position: function($el) { return $el.clientTop; },
    offset:   function($el) { return $el.offsetTop; },
    cursor:   function(event) { return event.clientY; },
  };

  constructor() {
  
  }

  ngOnInit(): void {
    console.log('init');
  }

  

  koordinate($pupille, $auge, cursor, achse) {
    var augeGroesse = achse.groesse($auge) - achse.groesse($pupille);
    //console.log('cursor:' + cursor + '$pupile:' + $pupille);
    //console.log(achse.cursor(cursor));
    //console.log(achse.position($pupille));
    //console.log(achse.offset($pupille));
    //console.log( achse.groesse($pupille));
    console.log('suma:' + (achse.cursor(cursor) + achse.position($pupille)));
    console.log('resta:' + (achse.offset($pupille) + achse.groesse($pupille)/2));
    var abstand = achse.cursor(cursor) +
                  achse.position($pupille) -
                  achse.offset($pupille) -
                  achse.groesse($pupille)/2;
    //console.log('augeGroesse:' + augeGroesse + 'abstand:' + abstand);
    return Math.max(0, Math.min(augeGroesse, abstand));
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    //console.log('move');
    var $pupille = document.getElementById('pupilleLinks');
    var $pupille2 = document.getElementById('pupilleLinks2');
    var $auge = document.getElementById('augeLinks');
    var $auge2 = document.getElementById('augeLinks2');
    $pupille.style.left = this.koordinate($pupille, $auge, event, this.horizontal) + 'px',
    $pupille.style.top =  this.koordinate($pupille, $auge, event, this.vertikal) + 'px';
    $pupille2.style.left = this.koordinate($pupille2, $auge2, event, this.horizontal) + 'px',
    $pupille2.style.top =  this.koordinate($pupille2, $auge2, event, this.vertikal) + 'px';
    //console.log('move_fi');
    //console.log($pupille.style.left);
    //console.log($pupille.style.top);
  }

}
