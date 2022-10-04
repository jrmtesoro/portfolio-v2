import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { moveFromRight } from 'ngx-router-animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations: [
    trigger('animationTranstion', [
      transition('* => *', useAnimation(moveFromRight)),
    ]),
  ],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
