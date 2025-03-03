import React from 'react';

import * as icons from '@/assets/icons';
import { isDevEnv, isMatchIconName } from '@/libs/utils/checks';
import type { TIconMap } from '@/types/common';
import type { TLiteralUnion } from '@/types/utilities';

interface IAppIconProps extends React.SVGProps<SVGSVGElement> {
  name: TLiteralUnion<TIconMap>;
  color?: string;
  size?: number | string;
}

export const AppIcon: React.FC<IAppIconProps> = (props) => {
  const { name, size, width = '24', height = '24', ...rest } = props;
  if (!isMatchIconName(name)) {
    return null;
  }

  const MatchIcon = icons[name] as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <MatchIcon
      aria-label={name}
      height={size ?? height}
      role="img"
      width={size ?? width}
      {...rest}
      {...(isDevEnv && { 'data-icon': name })}
    />
  );
};
