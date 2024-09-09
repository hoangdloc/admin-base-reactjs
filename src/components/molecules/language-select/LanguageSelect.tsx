import { useState } from 'react';

import { Button, Drawer, Popover } from '@/components/atoms';
import { BREAKPOINT } from '@/libs/constants';
import { useMediaQuery } from '@/libs/hooks';
import { EAppLanguage } from '@/types/enums';

import type { TLanguageSelectProps } from './types';

const LanguageSelect: React.FC<TLanguageSelectProps> = ({
  onChange: setControlledValue,
  value: controlledValue,
  defaultValue = (import.meta.env.VITE_LANGUAGE as EAppLanguage) ||
    EAppLanguage.EN,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [uncontrolledValue, setUncontrolledValue] =
    useState<EAppLanguage>(defaultValue);

  const value = controlledValue ?? uncontrolledValue;
  const setValue = setControlledValue ?? setUncontrolledValue;

  const isDesktop = useMediaQuery(BREAKPOINT.medium);

  if (isDesktop) {
    return (
      <Popover.Root
        open={open}
        onOpenChange={setOpen}
      >
        <Popover.Trigger asChild>
          <Button>Language</Button>
        </Popover.Trigger>
        <Popover.Content>
          <LanguageSelectInternal />
        </Popover.Content>
      </Popover.Root>
    );
  }

  return (
    <Drawer.Root
      open={open}
      onOpenChange={setOpen}
    >
      <Drawer.Trigger asChild>
        <Button>Language</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <LanguageSelectInternal />
      </Drawer.Content>
    </Drawer.Root>
  );
};
LanguageSelect.displayName = 'LanguageSelect';

const LanguageSelectInternal: React.FC = () => {
  return <div>EN</div>;
};
LanguageSelectInternal.displayName = 'LanguageSelectInternal';

export { LanguageSelect };
