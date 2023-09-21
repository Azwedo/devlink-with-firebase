import { FC, Fragment, ReactElement } from "react";
import { HeaderNavigation, useAccountState } from "@/data";
import { AuthWithGoogle, SignOut } from "@/controllers";
import { BigHeader, Button, NavItemLink, NavLinkItemActive } from "../webflow";
import { ActiveSidebarLink } from "@/utils";
import { usePathname } from "next/navigation";
import { UserProfile } from "../webflow/UserProfile";

const Authenticated: FC = (): ReactElement => {
    return (
        <UserProfile
            text="Benjamini"
            url=""
        /> 
    )
}

const Unauthenticated: FC = (): ReactElement => {
    return (
        <Button show={true} >
            Login with Google
        </Button>
    )
}

const AuthHandler: FC = (): ReactElement => {
    const { Auth, Loading } = useAccountState() as AccountStateType

    const signInWithGoogle = async () => await AuthWithGoogle()
    const signOut = async () => await SignOut()

    if(!Loading && Auth) return <Authenticated />
    if(!Loading && !Auth) return <Unauthenticated />

    else return <p>
        Loading...
    </p>
}

const Items: FC = (): ReactElement => {
    const pathname = usePathname();

    return (
        <Fragment>
            {
                HeaderNavigation.map((nav: HeaderNavigationType, index: number) => {
                    const isCurrent = ActiveSidebarLink(pathname, nav.href)
            
                    return (
                        <Fragment key={index}>
                            {
                                isCurrent && 
                                <NavLinkItemActive 
                                    text={nav.name}
                                    link={{href: nav.href}}
                                />
                            }
                                    
                            { 
                                !isCurrent &&
                                <NavItemLink
                                    // @ts-ignore
                                    text={nav.name}
                                    link={{href: nav.href}}
                                />
                            }
                        </Fragment>
                    )
                  })
            }
        </Fragment>
    )
    
}


const Navigation: FC = (): ReactElement => {
    return (
        <BigHeader 
            links={<Items />} 
            // user={<AuthHandler />}
        />
    )
}

export default Navigation