import { features } from '@/lib/constants'
import * as motion from 'motion/react-client'

export default function WhyChooseUs() {
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

        {/* 2. Program Cards */}

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              return (
                <motion.div
                  key={feature.title}
                  className="group cursor-pointer group text-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.12 * index }}
                  whileHover={{ scale: 1.03 }}>
                  {/* Icon */}

                  <motion.div
                    className="h-16 w-16 rounded-full bg-primary/20 inline-flex items-center justify-center group-hover:bg-primary transition-colors duration-300 mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeOut',
                      delay: 0.18 * index
                    }}>
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl font-bold font-heading mb-4 text-foreground"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.14 * index }}>
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.14 * index }}>
                    {feature.description}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
