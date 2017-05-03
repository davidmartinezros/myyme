import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {
  
  }

  horizontal = {
    tamany:  function($el) { return $el.clientWidth; },
    position: function($el) { return $el.clientLeft; },
    offset:   function($el) { return $el.offsetLeft; },
    cursor:   function(event) { return event.clientX; },
  };
  vertikal = {
    tamany:  function($el) { return $el.clientHeight; },
    position: function($el) { return $el.clientTop; },
    offset:   function($el) { return $el.offsetTop; },
    cursor:   function(event) { return event.clientY; },
  };

  ngOnInit(): void {
    console.log('init');
  }

  koordinate($pupila, $ull, cursor, achse) {
    var tamanyUll = achse.tamany($ull) - achse.tamany($pupila);

    var abstand = achse.cursor(cursor) +
                  achse.position($pupila) -
                  achse.offset($pupila) -
                  achse.tamany($pupila)/2;
    
    return Math.max(0, Math.min(tamanyUll, abstand));
  
  }

  @HostListener('mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    //console.log('move');
    var $pupila = document.getElementById('pupilaLinks');
    var $pupila2 = document.getElementById('pupilaLinks2');
    var $ull = document.getElementById('ullLinks');
    var $ull2 = document.getElementById('ullLinks2');
    $pupila.style.left = this.koordinate($pupila, $ull, event, this.horizontal) + 'px',
    $pupila.style.top =  this.koordinate($pupila, $ull, event, this.vertikal) + 'px';
    $pupila2.style.left = this.koordinate($pupila2, $ull2, event, this.horizontal) + 'px',
    $pupila2.style.top =  this.koordinate($pupila2, $ull2, event, this.vertikal) + 'px';
    //console.log('move_fi');
    //console.log($pupille.style.left);
    //console.log($pupille.style.top);
  }

}
