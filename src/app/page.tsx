import Hero from '@/components/standalone/Hero'
import Programs from '@/components/standalone/Programs'
import WhyChooseUs from '@/components/standalone/WhyChooseUs'

export default function Home() {
  return (
    <div>
      {/* 1. Hero Component */}
      <Hero />

      {/* 2. Programs Component */}
      <Programs />

      {/* 3. WhyChooseUs Component */}

      <WhyChooseUs />
    </div>
  )
}
