'use client'

import "@/ui/webflow/global.css";
import '@/ui/styles/tailwind.css'
import '@/ui/styles/devlink-with-firebase.css'

import { DevLinkProvider } from '@/ui/webflow'
import { LinkRenderer, Navigation } from "@/ui/components";
import { useAccountState } from "@/data";
import { useEffect, type FC } from 'react'
import { AuthMiddleware } from "@/controllers";

const Layout: FC<ChildrenProp> = (props) => {
  const { children } = props
  const { StateSetAccount, StateRemoveAccount } = useAccountState() as AccountStateType

  useEffect(() => {
    AuthMiddleware(
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