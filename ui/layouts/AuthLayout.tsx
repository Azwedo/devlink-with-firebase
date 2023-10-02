import { FC, Fragment } from "react"
import { Navigation, Footer } from "@/ui/views"
import { ChildrenProp } from "@/ts/Types"

const AuthLayout: FC<ChildrenProp> = (props) => {
  const { children } = props

  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  )
}

export default AuthLayout