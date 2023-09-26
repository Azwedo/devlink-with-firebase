import { FC, ReactElement } from "react"
import { useAccountState } from "@/data"
import { Authenticated, Unauthenticated } from "@/ui/components"
import { Loader } from "@/ui/views"

const AuthHandler: FC = (): ReactElement => {
    const { User, Loading } = useAccountState() as AccountStateType

    if(!Loading && User) return <Authenticated />
    else if(!Loading && !User) return <Unauthenticated />
    else return <Loader />
}

export default AuthHandler