type PortfolioColor =
  | 'primary'
  | 'primary1'
  | 'primary2'
  | 'secondary'
  | 'tertiary'
  | 'medium'
  | 'light'
  | 'dark'
  | 'gray';

enum PORTFOLIO_COLORS_CSS {
  'primary' = 'var(--primary)',
  'primary1' = 'var(--primary1)',
  'primary2' = 'var(--primary2)',
  'gray' = 'var(--gray)',
  'secondary' = 'var(--secondary)',
  'tertiary' = 'var(--tertiary)',
  'medium' = 'var(--medium)',
  'light' = 'var(--light)',
  'dark' = 'var(--dark)',
}

export { PORTFOLIO_COLORS_CSS, PortfolioColor };
