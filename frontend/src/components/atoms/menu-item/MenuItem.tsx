import Link from "next/link";
import { MenuItemProps } from "./types";

export function MenuItem({
  href,
  selected,
  newTab,
  children,
  className,
  ...rest
}: MenuItemProps) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      {...rest}
    >
      <span className={`
        flex items-center gap-2 text-sm border-red-600 hover:text-white
        ${selected ? " border-b-4 text-white" : "text-zinc-400"} 
        ${className ?? ''}
        `}>
        {children}
      </span>
    </Link>
  );
}
