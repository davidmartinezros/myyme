import { Component, OnInit, Input } from '@angular/core';
import { Unity } from '../unity';

@Component({
  selector: 'app-print-unities',
  templateUrl: './print-unities.component.html',
  styleUrls: ['./print-unities.component.css']
})
export class PrintUnitiesComponent implements OnInit {

  @Input() unities: Unity[];
  
  constructor() { }

  ngOnInit() {
  }

}
