import { FC, ReactElement } from "react"
import { FullPageCenterLayout, PageLayout } from "../webflow"

const Loader: FC = (): ReactElement => {
  const loadingStyles = {
    height: "95vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <FullPageCenterLayout>
      <PageLayout>
        <div style={loadingStyles}>
          Loading ...
        </div>
      </PageLayout>
    </FullPageCenterLayout>
  )
}

export default Loader