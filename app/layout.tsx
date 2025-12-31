import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Javari Fitness | Workouts, Nutrition & Wellness',
  description: 'Personalized workout plans, nutrition tracking, and wellness programs. Achieve your fitness goals with AI-powered guidance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
