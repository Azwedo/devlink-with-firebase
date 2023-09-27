import { FooterList } from "@/data";
import { List, ListItem, } from "@/ui/webflow";
import { FC, Fragment, ReactElement } from "react";

const FooterListItems: FC<{items: any}> = (props): ReactElement => {

    const {items} = props
    return (

        <Fragment>
            {
                items.map((list: FooterListItemType, index: number) => {
                    return (
                        <Fragment key={index}>
                            {
                              <ListItem name={list.name} href={list.href}/>
                            }
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default FooterListItems