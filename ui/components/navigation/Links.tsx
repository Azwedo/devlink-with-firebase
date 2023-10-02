import { FC, Fragment, ReactElement } from "react";
import { usePathname } from "next/navigation";
import { HeaderNavigation } from "@/data";
import { ActiveSidebarLink } from "@/utils";
import { NavItemLink, NavLinkItemActive } from "@/ui/webflow";
import { HeaderNavigationType } from "@/ts/Types";

const Links: FC = (): ReactElement => {
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

export default Links