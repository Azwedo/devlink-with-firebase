'use client'

import { FC, Fragment, ReactElement} from "react"
import { PageHeaderInfo } from "@/ui/webflow"

const Page: FC = (): ReactElement => {
  return (
    <Fragment>
      <PageHeaderInfo title="Dashboard" />
    </Fragment>
  )
}

export default Page