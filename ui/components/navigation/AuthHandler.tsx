import { FC, ReactElement } from "react"
import { useAccountState } from "@/data"
import { Authenticated, Unauthenticated } from "@/ui/components"
import { Loader } from "@/ui/views"

const AuthHandler: FC = (): ReactElement | undefined => {
    const { User, Loading } = useAccountState() as AccountStateType

    if(!Loading && User) return <Authenticated />
    if(!Loading && !User) return <Unauthenticated />
    else return <Loader />
}

export default AuthHandler