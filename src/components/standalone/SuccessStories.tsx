import { testimonials } from '@/lib/constants'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'

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
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real transformations from real people who chose to change their lives with our programs.
          </motion.p>
        </div>

        {/* 2. Testimonail Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonail, index) => {
            return (
              <motion.div
                key={testimonail.name}
                className="group">
                <Card className="hover:scale-105 hover:shadow-2xl duration-600 transition-shadow">
                  <CardContent>
                    <motion.div className="h-30 w-24 mx-auto relative">
                      <Image
                        alt={testimonail.details}
                        src={testimonail.image}
                        fill
                        className="object-cover rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
