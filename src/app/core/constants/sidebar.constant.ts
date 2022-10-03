import { SocialIcon } from 'src/app/shared/models/social-icon.interface';
import { SideNav } from '../models/sidenav.interface';

export const SIDEBAR_NAVIGATIONS: Array<SideNav> = [
  {
    label: 'About Me',
    icon: 'person',
    active: true,
    tooltip: 'Know more about me',
    route: 'about-me',
  },
  {
    label: 'Portfolio',
    icon: 'integration_instructions',
    tooltip: 'Learn about my projects',
    route: 'portfolio',
  },
  {
    label: 'Resume',
    icon: 'description',
    tooltip: 'View my resume',
    route: 'resume',
  },
  {
    label: 'Contact',
    icon: 'contact_mail',
    tooltip: 'Contact me',
    route: 'contact',
  },
];

export const SOCIAL_ICONS: Array<SocialIcon> = [
  {
    tooltip: 'Github',
    link: '#',
    icon: {
      type: 'material',
      name: 'person',
    },
  },
  {
    tooltip: 'Github',
    link: '#',
    icon: {
      type: 'font-awesome',
      prefix: 'fab',
      name: 'github-alt',
    },
  },
  {
    tooltip: 'Facebook',
    link: '#',
    icon: {
      type: 'font-awesome',
      prefix: 'fab',
      name: 'facebook-f',
    },
  },
  {
    tooltip: 'Linked In',
    link: '#',
    icon: {
      type: 'font-awesome',
      prefix: 'fab',
      name: 'linkedin-in',
    },
  },
];
