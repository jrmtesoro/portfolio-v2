import { MaterialFontAwesomeIcon } from 'src/app/shared/models/icon.interface';

export interface SideNav {
  label: string;
  icon: string;
  tooltip: string;
  active?: boolean;
}

export interface SideNavSocial extends MaterialFontAwesomeIcon {
  tooltip: string;
  link: string;
}
