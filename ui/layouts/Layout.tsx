'use client'

import { FC, ReactElement } from "react"
import { AuthLayout, UnauthLayout } from "@/ui/layouts"
import { useAccountState } from "@/data"
import { AccountStateType, ChildrenProp } from "@/ts/Types"
import { Loader } from "@/ui/views"

const Layout: FC<ChildrenProp> = (props): ReactElement => {
    const { children } = props
    const { User, Loading } = useAccountState() as AccountStateType

    if(Loading === false && typeof User === 'object') return <AuthLayout>{children}</AuthLayout>
    if(Loading === false && User === false && User !== null) return <UnauthLayout />
    else return <Loader />
}

export default Layout
