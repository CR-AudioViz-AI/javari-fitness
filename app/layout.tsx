// app/layout.tsx — Javari Fitness
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Fitness | Javari by CR AudioViz AI',
  description: 'AI fitness and workout planning',
  keywords: 'Javari Fitness, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Fitness"
          appColor="#ef4444"
          appEmoji="💪"
          appDesc="AI fitness and workout planning"
      handoffApp="Javari Health"
      handoffUrl="https://javari-health.vercel.app"
      handoffPitch="Track your health alongside your fitness →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
