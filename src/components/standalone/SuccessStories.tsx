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
                <Card className="hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <motion.div className="h-30 w-24 mx-auto relative mb-6">
                      <Image
                        alt={testimonail.details}
                        src={testimonail.image}
                        fill
                        className="object-cover rounded-full border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                      />
                    </motion.div>

                    <motion.blockquote className="text-lg font-semibold font-heading text-foreground mb-4">
                      &quot;{testimonail.story}&quot;
                    </motion.blockquote>

                    <motion.p className="text-muted-foreground leading-relaxed mb-4">
                      {testimonail.details}
                    </motion.p>

                    <motion.cite
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeOut',
                        delay: index * 0.2
                      }}
                      className="text-primary font-bold italic">
                      - {testimonail.name}
                    </motion.cite>
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
