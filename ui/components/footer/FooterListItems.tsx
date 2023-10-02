import { FooterNavigationItemType } from "@/ts/Types";
import { ListItem, } from "@/ui/webflow";
import { ActiveSidebarLink } from "@/utils";
import { usePathname } from "next/navigation";
import { FC, Fragment, ReactElement } from "react";

const FooterListItems: FC<{items: any}> = (props): ReactElement => {
    const pathname = usePathname();
    const { items } = props

    return (
        <Fragment>
            {
                items.map((list: FooterNavigationItemType) => {
                    const isCurrent = ActiveSidebarLink(pathname, list.href)
                    
                    return (
                        <Fragment key={list.name}>
                            <ListItem 
                                name={list.name} 
                                link={{ href: list.href }}
                                props={{style: isCurrent ? {color: "#7556ed"} : {}}}
                            />
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default FooterListItems