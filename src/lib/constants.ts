import { Calendar, CheckCircle, TrendingUp, Users } from 'lucide-react'

export const menuItems = [
  {
    name: 'Home',
    href: '#'
  },
  {
    name: 'Programs',
    href: '#'
  },
  {
    name: 'About',
    href: '#'
  },
  {
    name: 'Pricing',
    href: '#'
  },
  {
    name: 'Contact',
    href: '#'
  }
]

export const programs = [
  {
    title: 'Strength Training',
    description: 'Build muscle and increase your power with our comprehensive strength program',
    image: '/program-4.jpg'
  },
  {
    title: 'Yoga & Flexibility',
    description: 'Increase your flexibility, balance & mindfulness through guided yoga sessions',
    image: '/program-5.jpg'
  },
  {
    title: 'Cardio Workouts',
    description: 'Boost your cardiovascular health with high-energy cardio training sessions',
    image: '/program-6.jpg'
  },
  {
    title: 'Nutrition Guidance',
    description:
      'Get personalised nutrition plans to fuel your body and achieve your fitness goals',
    image: '/program-7.jpg'
  }
]

export const features = [
  {
    icon: CheckCircle,
    title: 'Certified Professional Trainers',
    description:
      'Work with certified fitness professionals who have years of experience and expertise.'
  },
  {
    icon: TrendingUp,
    title: 'Personilised Work & Diet Plans',
    description: 'Get customized plans tailored to your '
  },
  {
    icon: Calendar,
    title: 'Flexible Schedules',
    description: 'Choose from online and offline sessions that fit your busy lifestyle and schedule'
  },
  {
    icon: Users,
    title: 'Community Support & Progress Tracking',
    description:
      'Join a supportive community and track your progress with our advanced monitoring tools'
  }
]

export const testimonials = [
  {
    name: 'Sarah M.',
    story: 'I lost 20lbs in 3 months with this program!',
    details:
      'The personalised training and nutrition plan made all the difference. I feel stronger and more confident than ever.',
    image: '/sarah.jpg',
    rating: 4
  },
  {
    name: 'John D.',
    story: 'The trainers push me beyond my limits in a healthy way',
    details:
      "Professional motivating and results-driven. I've gained weight and improved my overall fitness significantly.",
    image: '/john.jpg',
    rating: 5
  },
  {
    name: 'Emily R.',
    story: 'Flexible scheduling made it possible to stay consistent',
    details:
      'As a busy mon, the online sessions and flexible timing helped me maintain my fitness routine without stress.',
    image: '/emily.jpg',
    rating: 5
  }
]

// From Design to Schema
export const plans = [
  {
    plan: 'Basic',
    desc: 'Perfect for getting started with fitness',
    price: 29,
    period: 'month',
    features: [
      'Gym Access',
      'Basic Equipment Usage',
      'Locker Room Access',
      'Mobile App Access',
      'Progress Tracking'
    ],
    popular: false
  },
  {
    plan: 'Pro',
    desc: 'Most popular choice for serious fitness enthusiasts',
    price: 59,
    period: 'month',
    features: [
      'Everything in Basic',
      '4 Personal training sessions',
      'Group classes',
      'Nutrition Consultation',
      'Priority Support',
      'Custom Workout plans'
    ],
    popular: true
  },
  {
    plan: 'Elite',
    desc: 'Complete fitness transformation package',
    price: 99,
    period: 'month',
    features: [
      'Everything in Pro',
      'Unlimited training sessions',
      'Personal nutrition coach',
      'Online classes access',
      '24/7 gym access',
      'Recovery and wellness sessions',
      'VIP member benefits'
    ],
    popular: false
  }
]
