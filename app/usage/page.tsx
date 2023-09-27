import { FC, Fragment, ReactElement } from "react";
import { PageHeaderInfo, PageLayout } from "@/ui/webflow";
import { Metadata } from "next";

const Contact: FC = (): ReactElement => {
  return (
    <Fragment>
      <PageHeaderInfo title="Usage" />

      <PageLayout>
          {/* BUILD_AREA */}
      </PageLayout>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Usage',
  description: 'Short Description ...'
}

export default Contact