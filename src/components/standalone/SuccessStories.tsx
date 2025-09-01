import { testimonials } from '@/lib/constants'
import * as motion from 'motion/react-client'
import Image from 'next/image'

export default function SuccessStories() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Heading & Sub-text */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground">
            Why Choose <span className="text-primary">FitPro</span> Fitness?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed on your fitness journey with proved methods
            and expert support.
          </motion.p>
        </div>

        {/* 2. Testimonail Cards */}
      </div>
    </section>
  )
}
