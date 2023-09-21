import '@/ui/styles/tailwind.css'
import '@/ui/styles/devlink-with-firebase.css'

import type { FC } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevLink with Firebase',
  description: 'DevLink with Firebase',
}

const Layout: FC<ChildrenProp> = (props) => {
  const { children } = props

  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout