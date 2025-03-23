import Image from "next/image";

export function MiniCurriculum() {
  return (
    <div className="flex flex-1 gap-6 flex-col-reverse md:flex-row xl:flex-row lg:flex-col-reverse items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
      <div
        className="relative min-w-72 h-64 xl:self-end"
      >
        <Image
          src="/profile.png"
          alt="Foto de perfil"
          fill
        />
      </div>

      <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
        <div className="flex flex-col items-center md:items-center lg:items-center xl:items-start">
          <span className="bg-gradient-to-r from-red-500 via-white to white
          text-transparent bg-clip-text text-2xl font-bold ">Anderson Nascimento</span>
          <span>Web Development</span>
        </div>
        <p className="text-sm  text-center md:text-left lg:text-center xl:text-left">
          Full Stack Developer with +3 years of experience in web development. I have worked with technologies such as React, Node.js, Next.js, Express, and others. I am passionate about solving problems and creating solutions that make people lives easier.
        </p>
      </div>
    </div>
  )
}
