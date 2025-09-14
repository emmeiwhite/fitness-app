import { plans } from '@/lib/constants'
import * as motion from 'motion/react-client'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Check } from 'lucide-react'

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
                className={`group`}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}>
                <Card
                  className={`hover:shadow-2xl transition-shadow  relative py-8 ${
                    plan.popular ? 'border-2 border-primary ring-1 ring-primary/20' : ''
                  }`}>
                  <CardHeader className="text-center">
                    {' '}
                    <h3 className="font-bold mb-2  text-2xl font-heading text-foreground">
                      {plan.plan}
                    </h3>
                    <p className="mb-4 text-muted-foreground">{plan.desc}</p>
                    <div className="text-shadow-transparent">
                      <span className="text-5xl font-heading font-black text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-muted-foreground ml-1">/${plan.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => {
                        return (
                          <motion.li
                            key={index}
                            className="flex items-center  capitalize">
                            <Check className="text-green-500 w-5 h-5 mr-3" />
                            <p className="text-muted-foreground">{feature}</p>
                          </motion.li>
                        )
                      })}
                    </ul>

                    <Button
                      className={` text-lg text-muted-foreground rounded-md w-full py-2 font-semibold transition-colors duration-300  capitalize ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90 text-secondary'
                          : 'bg-foreground hover:bg-foreground text-secondary'
                      }`}>
                      join now{' '}
                    </Button>

                    {/* For Popular Div */}
                    {plan.popular ? (
                      <Badge className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 px-6 py-1 rounded-md bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    ) : (
                      ''
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: 'easeOut'
          }}>
          <p className="text-muted-foreground">
            All plans include 7-day free trial. No commitment required.{' '}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
