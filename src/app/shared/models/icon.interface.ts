import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

type IconType = 'material' | 'font-awesome';

export interface MaterialFontAwesomeIcon {
  iconType: IconType;
  iconName: IconName;
  iconPrefix?: IconPrefix;
}
