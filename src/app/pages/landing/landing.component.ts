import { Component, OnInit } from '@angular/core';
import { FULL_NAME, POSITION } from 'src/app/core/constants/personal-info';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  fullName = FULL_NAME;
  position = POSITION;
  description = `I'm a software engineer specialised in frontend and backend development 
  for complex scalable web apps. I write about software development on my blog. 
  Want to know how I may help your project? Check out my project portfolio and online resume.`;

  aboutMeImg = '../../../assets/images/about-me.jpg';
  constructor() {}

  ngOnInit(): void {}
}
