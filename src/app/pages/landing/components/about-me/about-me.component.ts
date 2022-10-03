import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { rotateCubeToLeft } from 'ngx-router-animations';
import {
  FULL_NAME,
  POSITION,
  LOREM,
} from 'src/app/core/constants/personal-info.constant';
import { PortfolioButton } from 'src/app/shared/models/button.interface';
import { PortfolioCard } from '../../models/card.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  // animations: [
  //   trigger('rotateCubeToLeft', [
  //     transition(
  //       '* => *',
  //       useAnimation(rotateCubeToLeft, {
  //         params: {
  //           enterTiming: '1',
  //           leaveTiming: '1',
  //           enterDelay: '0.2',
  //           leaveDelay: '0.2',
  //         },
  //       })
  //     ),
  //   ]),
  // ],
})
export class AboutMeComponent implements OnInit {
  fullName = FULL_NAME;
  position = POSITION;
  aboutMeDescription = LOREM;
  whatIDoDescription = LOREM;
  // aboutMeDescription = `I'm a ${POSITION} specialised in frontend and backend development
  // for complex scalable web apps. I write about software development on my blog.
  // Want to know how I may help your project? Check out my project portfolio and online resume.`;

  // whatIDoDescription = `I have more than 10 years' experience building software for clients all over the world.
  // Below is a quick overview of my main technical skill sets and technologies I use.
  // Want to find out more about my experience?
  // Check out my online resume and project portfolio.`;

  aboutMeImg = '../../../assets/images/about-me.jpg';

  buttons: Array<PortfolioButton> = [
    {
      label: 'View Portfolio',
      icon: {
        type: 'font-awesome',
        prefix: 'fas',
        name: 'arrow-circle-right',
      },
      btnColor: 'primary',
      labelColor: 'light',
    },
    {
      label: 'View Resume',
      icon: {
        type: 'material',
        name: 'description',
      },
      btnColor: 'primary1',
      labelColor: 'primary',
    },
  ];

  skillCards: Array<PortfolioCard> = [
    {
      title: 'Vanilla JavaScript',
      description: LOREM,
      headerIcons: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'js',
          color: '#F1DE4F',
        },
      ],
    },
    {
      title: 'Angular, React & Vue',
      description: LOREM,
      headerIcons: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'angular',
          color: '#CA3327',
        },
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'react',
          color: '#62D4FA',
        },
      ],
    },
    {
      title: 'Node JS',
      description: LOREM,
      headerIcons: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'node-js',
          color: '#54B689',
        },
      ],
    },
    {
      title: 'Python',
      description: LOREM,
      headerIcons: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'python',
          color: '#456E9C',
        },
      ],
    },
    {
      title: 'PHP',
      description: LOREM,
      headerIcons: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'php',
          color: '#777BAF',
        },
      ],
    },
    {
      title: 'HTML & CSS',
      description: LOREM,
      headerIcons: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'html5',
          color: '#DE6E3C',
        },
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'css3',
          color: '#53A7DC',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
