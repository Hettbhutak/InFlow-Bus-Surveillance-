import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { styled } from "@stitches/react";

export const NavigationMenu = styled(NavigationMenuPrimitive.Root, {
  className: "relative flex justify-center rounded-lg border border-[hsl(var(--dark-border-subtle))] bg-[hsl(var(--dark-bg-secondary))] p-2",
});

export const NavigationMenuItem = styled(NavigationMenuPrimitive.Item, {
  className: "px-3 py-2 text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] transition-colors",
});