import { FooterList } from "@/data";
import { List, } from "@/ui/webflow";
import { FC, Fragment, ReactElement } from "react";
import { FooterListItems } from ".";

const FooterLists: FC = (): ReactElement => {

    return (

        <Fragment>
            {
                FooterList.map((list: FooterListType, index: number) => {
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