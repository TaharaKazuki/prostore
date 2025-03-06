'use client';

import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ThemeList = [
  {
    label: 'System',
    value: 'system',
    icon: <SunMoon />,
  },
  {
    label: 'Light',
    value: 'light',
    icon: <SunIcon />,
  },
  {
    label: 'Dark',
    value: 'dark',
    icon: <MoonIcon />,
  },
];

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const checkTheme = () => ThemeList.find((item) => item.value === theme)?.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {checkTheme()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ThemeList.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.value}
            checked={theme === item.value}
            onClick={() => setTheme(item.value)}
          >
            {item.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default dynamic(() => Promise.resolve(ModeToggle), { ssr: false });
