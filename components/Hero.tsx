import { Button } from "@/components/ui/button"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="px-20 py-10">
      <div className="flex gap-5">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-6xl">
            The Digital Campus Platform for Modern Universities.
          </h1>
          <p>
            Study Sphare helps institutions streamline academic
            management while empowering students to stay organized and engaged.
          </p>
          <Button className="w-40">Get Started</Button>
        </div>
        <div className="w-full">
          <Image
            src="/hero.png"
            alt="hero-img"
            width={500}
            height={100}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
