import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { PortfolioColor } from './colors.interface';

export interface PortfolioMaterialIcon {
  type: 'material';
  name: string;
}

export interface PortfolioFontAwesomeIcon {
  type: 'font-awesome';
  prefix: IconPrefix;
  name: IconName;
  color?: PortfolioColor | string;
}

export type PortfolioIcon = PortfolioMaterialIcon | PortfolioFontAwesomeIcon;
