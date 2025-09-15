import { Facebook, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-foreground text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <p className="text-primary text-3xl font-black font-heading mb-4">FitPro Fitness</p>

            <p className="mb-6 leading-relaxed max-w-md">
              Transform your life with our comprehensive fitness program, expert trainers and
              supportive community
            </p>

            <div className="flex gap-8 items-center">
              <Link
                href="https://instagram.com"
                className="h-10 w-10 bg-secondary-foreground/40 rounded-full transition-colors duration-300 flex items-center justify-center hover:bg-primary ">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com"
                className="h-10 w-10 bg-secondary-foreground/40 rounded-full transition-colors duration-300 flex items-center justify-center hover:bg-primary ">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com"
                className="h-10 w-10 bg-secondary-foreground/40 rounded-full transition-colors duration-300 flex items-center justify-center hover:bg-primary ">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </footer>
  )
}
