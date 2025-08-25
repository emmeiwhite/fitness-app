import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-16 relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* 1. Image */}

        <Image
          src="/fitness-hero.jpg"
          alt="Fitness freaks doing workout"
          width={1200}
          height={680}
          //   fill
          className="object-cover object-center w-full"
        />

        {/* 2. Overlay */}

        <div className="absolute inset-0 bg-black/50"></div>

        {/* 3. Hero Text */}
      </div>
    </section>
  )
}
