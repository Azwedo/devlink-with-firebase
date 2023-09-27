'use client'

import { FC, Fragment, ReactElement} from "react"
import { PageHeaderInfo, PageLayout } from "@/ui/webflow"

const Page: FC = (): ReactElement => {
  return (
    <Fragment>
      <PageHeaderInfo title="Dashboard" />

      <PageLayout>
          {/* BUILD_AREA */}
      </PageLayout>
    </Fragment>
  )
}

export default Page