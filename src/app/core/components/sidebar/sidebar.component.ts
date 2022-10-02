import { Component, OnInit } from '@angular/core';
import { FULL_NAME, POSITION } from '../../constants/personal-info';
import { SideNav, SideNavSocial } from '../../models/sidenav.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  fullName = FULL_NAME;
  description = `Hi, my name is ${FULL_NAME} and I'm a ${POSITION}. Welcome to my personal website!`;
  profilePicture = '../../../assets/images/profile.jpeg';

  socialIcons: Array<SideNavSocial> = [
    {
      iconPrefix: 'fab',
      iconName: 'github-alt',
      tooltip: 'Github',
      link: '#',
    },
    {
      iconPrefix: 'fab',
      iconName: 'facebook-f',
      tooltip: 'Facebook',
      link: '#',
    },
    {
      iconPrefix: 'fab',
      iconName: 'linkedin-in',
      tooltip: 'Linked In',
      link: '#',
    },
  ];

  navigations: Array<SideNav> = [
    {
      label: 'About Me',
      icon: 'person',
      active: true,
      tooltip: 'Know more about me',
    },
    {
      label: 'Portfolio',
      icon: 'integration_instructions',
      tooltip: 'Learn about my projects',
    },
    {
      label: 'Resume',
      icon: 'description',
      tooltip: 'View my resume',
    },
    {
      label: 'Contact',
      icon: 'contact_mail',
      tooltip: 'Contact me',
    },
  ];

  activeNavigation?: SideNav;

  constructor() {
    this.activeNavigation = this.navigations.find(
      (navigation) => navigation.active
    );
  }

  ngOnInit(): void {}
}
