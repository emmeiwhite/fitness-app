import { menuItems } from '@/lib/constants'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. logo */}
          <span className="font-black text-2xl font-heading text-primary">FitPro</span>
          {/* 2. Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex  justify-between items-center h-16 gap-7">
              {menuItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium ">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* 3. Join Btn */}

          <div className="hidden md:flex items-center space-x-4">
            <Button className="font-semibold">Join Now</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
