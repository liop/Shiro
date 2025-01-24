import '../styles/index.css'

import type { PropsWithChildren } from 'react'
import { Analytics } from "@vercel/analytics/react"

import { init } from './init'
import { InitInClient } from './InitInClient'

init()
export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <Analytics>
      {children}
      <InitInClient />
      {/* <BrowserSupport /> */}
    </Analytics>
  )
}
