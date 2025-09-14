import Hero from '@/components/standalone/Hero'
import Pricing from '@/components/standalone/Pricing'
import Programs from '@/components/standalone/Programs'
import SuccessStories from '@/components/standalone/SuccessStories'
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

      {/* 4. SuccessStories */}

      <SuccessStories />

      {/* 5. Pricing Component */}
      <Pricing />
    </div>
  )
}
