import { Container, Header } from "@/components/atoms";
import { IMainProps } from "./types";
import { Technologies } from "@/components/atoms/technologies";

export function Main({ technologies }: IMainProps) {
  return (
    <div
      className="
      bg-[url('/principal.jpg')] h-[500px] bg-center bg-cover
      flex flex-col justify-center items-center"
    >
      <Header />

      <Container className="flex-1 flex w-full flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-1 items-center">
          <h1 className="flex gap-2 items-center">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            <span className="text-3xl sm:text-5xl font-bold text-center">
              Anderson Nascimento
            </span>
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
          </h1>
          <h2 className="text-zinc-500">Web Development</h2>
        </div>

        <Technologies technologies={technologies} />
      </Container>
    </div>
  )
}
