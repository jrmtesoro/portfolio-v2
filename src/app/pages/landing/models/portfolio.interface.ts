import { PortfolioIcon } from 'src/app/shared/models/icon.interface';

export interface PortfolioCategory {
  label: string;
  name: string;
  active?: boolean;
}

export interface PortfolioItem {
  title: string;
  description: string;
  imgSrc: string;
  codeLanguages: Array<PortfolioIcon>;
  tags: Array<string>;
}
