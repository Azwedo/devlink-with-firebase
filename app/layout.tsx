'use client'

import "@/ui/webflow/global.css";
import '@/ui/styles/tailwind.css'
import '@/ui/styles/devlink-with-firebase.css'

import { useEffect, type FC } from 'react'
import { DevLinkProvider } from '@/ui/webflow'
import { LinkRenderer } from "@/ui/components";
import { Navigation } from "@/ui/views";
import { useAccountState } from "@/data";
import { Authenticator } from "@/controllers";

const Layout: FC<ChildrenProp> = (props) => {
  const { children } = props
  const { StateSetAccount, StateRemoveAccount } = useAccountState() as AccountStateType

  useEffect(() => {
    Authenticator(
      StateSetAccount, 
      StateRemoveAccount
    )
  }, [])

  return (
    <html>
      <body>
        <DevLinkProvider renderLink={LinkRenderer}>
          <Navigation />
         
          {children}
        </DevLinkProvider>
      </body>
    </html>
  )
}

export default Layout