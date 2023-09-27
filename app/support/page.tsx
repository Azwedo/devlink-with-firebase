import { FC, Fragment, ReactElement } from "react";
import { PageHeaderInfo, PageLayout } from "@/ui/webflow";
import { Metadata } from "next";

const About: FC = (): ReactElement => {
  return (
    <Fragment>
      <PageHeaderInfo title="Support" />

      <PageLayout>
          {/* BUILD_AREA */}
      </PageLayout>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Support',
  description: 'Short Description ...'
}

export default About