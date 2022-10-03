import { PortfolioFontAwesomeIcon } from 'src/app/shared/models/icon.interface';

export interface PortfolioCard {
  title: string;
  description: string;
  headerIcons: Array<PortfolioFontAwesomeIcon>;
}
