import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components";
import { Menu } from "@/components";

export function Header() {
  return (
    <header className="w-full flex items-center h-16 bg-black/50">
      <Container className="flex-1 flex justify-center sm:justify-between items-center">

        <div className="flex flex-row items-center gap-10">
          <Link href="/" className="hidden sm:block">
            <Image src="/logo.svg" alt="Logo" width={80} height={0} />
          </Link>
          <Menu />
        </div>

        <div className="hidden sm:flex items-center">
          <Link
            href="https://www.linkedin.com/in/andersonnascimentoafsn/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 rounded-full px-7 py-1 text-sm font-bold"
          >
            Perfil
          </Link>
        </div>

      </Container>
    </header>
  )
}
