'use client';

import { MenuItem } from "@/components";
import { usePathname } from "next/navigation";

export function Menu() {
  const path = usePathname();

  return (
    <nav className="flex gap-6">
      <MenuItem href="/" selected={path === '/'}>Início</MenuItem>
      <MenuItem href="/project/1" selected={path.startsWith('/project')}>Projetos</MenuItem>
      <MenuItem
        href="https://api.whatsapp.com/send?phone=55829815223&text&type=phone_number"
        selected={false}
        newTab={true}
      >
        Contacto
      </MenuItem>
    </nav>
  )
}
