import { FC, Fragment, ReactElement } from "react";
import { Metadata } from "next";
import { PageHeaderInfo, PageLayout } from "@/ui/webflow";

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