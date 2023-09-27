import { FC, Fragment, ReactElement } from "react";
import { PageHeaderInfo, PageLayout } from "@/ui/webflow";

const Page: FC = (): ReactElement => {
  return (
    <Fragment>
      <PageHeaderInfo title="Users" />
      
      <PageLayout>
          {/* BUILD_AREA */}
      </PageLayout>
    </Fragment>
  )
}

export default Page