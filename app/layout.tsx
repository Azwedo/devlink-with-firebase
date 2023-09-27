'use client'

import "@/ui/webflow/global.css";
import '@/ui/styles/tailwind.css'
import '@/ui/styles/devlink-with-firebase.css'

import { type FC } from 'react'
import { DevLinkProvider } from '@/ui/webflow'
import { LinkRenderer } from "@/ui/components";
import { Navigation } from "@/ui/views";
import { Authenticator } from "@/controllers";
import FooterWebflow from "@/ui/views/Footer";
import { FirebaseAuth } from "@/lib";
import { useAccountState } from "@/data";

const Layout: FC<ChildrenProp> = (props) => {
  const StateAccount = useAccountState() as AccountStateType
  const { children } = props

  FirebaseAuth.onAuthStateChanged((user) => Authenticator(
    user,
    StateAccount
  ));

  return (
    <html>
      <body>
        <DevLinkProvider renderLink={LinkRenderer}>
          <Navigation />
          {children}
          <FooterWebflow />
        </DevLinkProvider>
      </body>
    </html>
  )
}

export default Layout