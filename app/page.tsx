'use client'

import { AuthWithGoogle, SignOut } from "@/controllers"
import { useAccountState } from "@/data/States"
import { Header, Logo, Navigation, NavigationItemContainer, NavigationItemText, NavigationItemsWrapper, ProfileContainer } from "@/ui/webflow"
import Link from "next/link"
import { Fragment, useEffect } from "react"

export default function Home() {
  const { 
    Auth, 
    Loading, 
    User, 
    StateSetAccount,
    StateRemoveAccount
  } = useAccountState() as any

  useEffect(() => {
    // CheckAuth()
    StateRemoveAccount()
  }, [])


  const signInWithGoogle = async () => {
    await AuthWithGoogle()
  }

  const signOut = async () => {
    await SignOut()
  }

  return (
    <main>
      <Navigation
        left={
          <>
            <Logo />
            <NavigationItemsWrapper
              items={
                <>
                  <NavigationItemContainer item={<Link href="/"><NavigationItemText text="Home" /></Link>} />
                  <NavigationItemContainer item={<Link href="/services"><NavigationItemText text="Services" /></Link>} />
                  <NavigationItemContainer item={<Link href="/about"><NavigationItemText text="About" /></Link>} />
                  <NavigationItemContainer item={<Link href="/contact"><NavigationItemText text="Contact" /></Link>} />
                </>
              }
            />
          </>
        }
        right={
          <>
            <ProfileContainer />
          </>
        }
      />

      {
        !Loading && !Auth &&
        <button onClick={signInWithGoogle}>
          Sign In with Google
        </button>
      }

      {
        Loading && 
        <p>
          Loading...
        </p>
      }

      {
        Auth &&
        <div>
          <pre>{User}</pre>
        </div>
      }

      {
        Auth && 
        <button onClick={signOut}>
          Logout
        </button>
      }
    </main>
  )
}
