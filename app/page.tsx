import { FC, Fragment, ReactElement} from "react"
import { PageHeaderInfo, PageLayout } from "@/ui/webflow"
import { Metadata } from "next"

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

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Short Description ...'
}

export default Page