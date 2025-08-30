import { programs } from '@/lib/constants'
import * as motion from 'motion/react-client'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

export default function Programs() {
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
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive fitness programs designed to meet your specific goals and
            fitness level.
          </motion.p>
        </div>

        {/* 2. Program Cards */}

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              return (
                <motion.div
                  key={program.title}
                  className="group cursor-pointer">
                  {/* Card Element from ShadCN */}
                  <Card className="p-0 transition-shadow duration-300 hover:shadow-2xl">
                    <div className="relative overflow-hidden rounded-t-lg w-full h-60 md:h-56 lg:h-40">
                      <Image
                        src={program.image}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                        alt={program.description}
                      />
                    </div>

                    <CardContent>
                      <motion.h3
                        className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors"
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}>
                        {program.title}
                      </motion.h3>
                      <p className="text-muted-foreground font-normal mb-4 transition-colors leading-relaxed">
                        {program.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
