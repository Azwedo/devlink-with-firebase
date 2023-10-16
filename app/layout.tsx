'use client'

import "@/ui/webflow/global.css";
import '@/ui/styles/tailwind.css'
import '@/ui/styles/devlink-with-firebase.css'

import { type FC } from 'react'
import { DevLinkProvider } from '@/ui/webflow'
import { LinkRenderer } from "@/ui/components";
import { Authenticator } from "@/controllers";
import { FirebaseAuth } from "@/lib/Firebase";
import { useAccountState } from "@/data";
import { AccountStateType, ChildrenProp } from "@/ts/Types";
import { Layout as AuthHandler } from "@/ui/layouts";

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
          <AuthHandler>
            {children}
          </AuthHandler>
        </DevLinkProvider>
      </body>
    </html>
  )
}

export default Layout