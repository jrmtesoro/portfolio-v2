import { Component, OnInit } from '@angular/core';

import { SocialIcon } from 'src/app/shared/models/social-icon.interface';

import { FULL_NAME, POSITION } from '../../constants/personal-info.constant';
import { PortfolioButton } from 'src/app/shared/models/button.interface';
import { SOCIAL_ICONS } from '../../constants/sidebar.constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  fullName = FULL_NAME;
  description = `Hi, my name is ${FULL_NAME} and I'm a ${POSITION}. Welcome to my personal website!`;
  profilePicture = '../../../assets/images/profile.jpeg';

  socialIcons: Array<SocialIcon> = SOCIAL_ICONS;

  contactMeBtn: PortfolioButton = {
    label: 'Contact Me',
    icon: {
      type: 'material',
      name: 'mail',
    },
    btnColor: 'secondary',
    labelColor: 'light',
  };

  constructor() {}

  ngOnInit(): void {}
}
