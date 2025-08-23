'use client'

import { Button } from '@/components/ui/button'

export default function Likes() {
  if (typeof localStorage !== 'undefined') {
    console.log(typeof localStorage)
  }

  return (
    <div>
      <h2>12 likes</h2>
      <Button onClick={() => console.log('button clicked!')}>click me!</Button>
      {String(console.log('Running on the server'))}
    </div>
  )
}
