import { PortfolioColor } from './colors.interface';
import { PortfolioIcon } from './icon.interface';

export interface PortfolioButton {
  label: string;
  icon: PortfolioIcon;
  btnColor?: PortfolioColor;
  labelColor?: PortfolioColor;
}
