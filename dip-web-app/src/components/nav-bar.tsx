import React from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"

import Link from 'next/link';


export default function NavComponent() {
  return (
    <div>
<NavigationMenuItem>
  <Link href="https://github.com/cyprus09/Car-Cabin-Monitoring" passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

    </div>
  );
}
