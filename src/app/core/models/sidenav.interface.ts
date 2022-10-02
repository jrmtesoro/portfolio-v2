import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

export interface SideNav {
  label: string;
  icon: string;
  tooltip: string;
  active?: boolean;
}

export interface SideNavSocial {
  iconPrefix: IconPrefix;
  iconName: IconName;
  tooltip: string;
  link: string;
}
