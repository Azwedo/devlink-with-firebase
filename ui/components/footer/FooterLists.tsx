import { FC, Fragment, ReactElement } from "react";
import { FooterNavigation } from "@/data";
import { List, } from "@/ui/webflow";
import { FooterListItems } from "@/ui/components/footer";
import { FooterNavigationType } from "@/ts/Types";

const FooterLists: FC = (): ReactElement => {
    return (
        <Fragment>
            {
                FooterNavigation.map((list: FooterNavigationType, index: number) => {
                    return (
                        <Fragment key={index}>
                            {
                                <List
                                    title={list.title}
                                    items={<FooterListItems items={list.items}/> }
                                />
                            }
                        </Fragment>
                    )
                })
            }
        </Fragment>
    )
}

export default FooterLists