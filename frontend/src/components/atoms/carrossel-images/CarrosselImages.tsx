import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ICarrosselImagesProps } from "./types";
import Image from "next/image";

export function CarrosselImages({ images }: ICarrosselImagesProps) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="w-7/10 md:w-11/12 xl:w-full "
    >
      <CarouselContent>
        {
          images.map((image, index) => (
            <CarouselItem key={index} className="relative h-96 w-full">
              <Image
                src={image}
                alt="Imagem do projeto"
                fill
                className="object-cover"
              />
            </CarouselItem>
          ))
        }
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
