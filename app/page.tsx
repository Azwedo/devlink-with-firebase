import { FC, Fragment, ReactElement} from "react"
import { Metadata } from "next"
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

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Short Description ...'
}

export default Page