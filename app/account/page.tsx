import { FC, Fragment, ReactElement } from "react";
import { PageHeaderInfo } from "@/ui/webflow";

const Page: FC = (): ReactElement => {
    return (
        <Fragment>
          <PageHeaderInfo title="Account" />
        </Fragment>
    )
}

export default Page
