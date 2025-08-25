import Image from 'next/image'
import { Button } from '../ui/button'

import * as motion from 'motion/react-client'

export default function Hero() {
  return (
    <section className="pt-16 relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* 1. Image */}

        <Image
          src="/fitness-hero.jpg"
          alt="Fitness freaks doing workout"
          //   width={1200}
          //   height={680}
          fill
          className="object-cover object-center w-full"
        />

        {/* 2. Overlay */}

        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 3. Hero Text */}
      <div className="relative z-10 text-white text-center max-w-4xl">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="text-5xl md:text-7xl font-black font-heading mb-6 leading-tighter">
            Transform Your Body , <span className="text-primary">Transfrom Your Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            {' '}
            Join our fitness programs and achieve your goals with expert trainers and personalised
            plans.
          </motion.p>

          {/* Buttons from ShadCN */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8">
              Start Free Trail
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent  text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8">
              View Plans
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 h-10 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 flex justify-center pt-2">
          <div className="h-3 w-1 rounded-full rounded-2 bg-primary-foreground animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
