import { plans } from '@/lib/constants'
import * as motion from 'motion/react-client'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Button } from '../ui/button'

export default function Pricing() {
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
            className="text-4xl md:text-5xl font-black font-heading mb-4 text-foreground capitalize">
            Affordable <span className="text-primary">Plans</span> for everyone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your budget and fitness goals. All plans include our
            core benefits
          </motion.p>
        </div>

        {/* 2. Plan Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            return (
              <motion.div
                key={plan.plan}
                className={`group  `}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: 'easeOut'
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3, delay: 0 } }}>
                <Card
                  className={`hover:shadow-2xl transition-shadow  relative ${
                    plan.popular ? 'border-2 border-red-600 rounded-lg' : ''
                  }`}>
                  <CardHeader>
                    {' '}
                    <h3 className="font-bold mb-2 mx-auto text-2xl font-heading text-foreground">
                      {plan.plan}
                    </h3>
                    <p className="mb-4 text-muted-foreground">{plan.desc}</p>
                    <div className="text-shadow-transparent flex justify-center items-end mb-5">
                      <span className="text-5xl font-extrabold">${plan.price}</span>/
                      <span className="text-muted-foreground">${plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8 text-center">
                    <ul>
                      {plan.features.map((feature, index) => {
                        return (
                          <motion.li
                            key={index}
                            className="flex gap-5 mb-3 capitalize">
                            <span>✅</span>
                            <p>{feature}</p>
                          </motion.li>
                        )
                      })}
                    </ul>

                    <Button
                      className={`bg-black text-white rounded-md w-full py-2 block mt-8 capitalize ${
                        plan.popular ? 'bg-red-600' : ''
                      }`}>
                      join now{' '}
                    </Button>

                    {/* For Popular Div */}
                    {plan.popular ? (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 px-6 py-1 rounded-md   bg-red-600 text-white">
                        Most Popular
                      </div>
                    ) : (
                      ''
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div>
          <p>All plans include 7-day free trial. No commitment required. </p>
        </motion.div>
      </div>
    </section>
  )
}
