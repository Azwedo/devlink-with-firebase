import { FC, Fragment, ReactElement } from "react";
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

export default About