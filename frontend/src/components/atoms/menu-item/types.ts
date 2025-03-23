import { ComponentProps } from "react";
import Link from "next/link";

export interface MenuItemProps extends ComponentProps<typeof Link>{
  selected: boolean;
  newTab?: boolean;
}