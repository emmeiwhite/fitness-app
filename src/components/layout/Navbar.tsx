import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. logo */}
          <span className="font-black text-2xl font-heading text-primary">FitPro</span>

          {/* 2. Menus */}
          <ul className="flex justify-between items-center h-16 gap-7">
            <li>Home</li>
            <li>Programs</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>

          {/* 3. Join Btn */}

          <Button>Join Now</Button>
        </div>
      </div>
    </nav>
  )
}
