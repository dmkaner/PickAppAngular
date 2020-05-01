import { Component, OnInit } from '@angular/core';
import icSmartphone from '@iconify/icons-ic/twotone-smartphone';
import icPerson from '@iconify/icons-ic/twotone-person';

@Component({
  selector: 'vex-schedule-pickup',
  templateUrl: './schedule-pickup.component.html',
  styleUrls: ['./schedule-pickup.component.scss']
})
export class SchedulePickupComponent implements OnInit {

  icSmartphone = icSmartphone;
  icPerson = icPerson;

  constructor() { }

  ngOnInit() {
  }

}
