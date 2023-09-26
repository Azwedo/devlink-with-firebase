import { useAccountState } from "@/data"
import { MiniButtonSecondary, UserProfile } from "@/ui/webflow"
import { FC, Fragment, ReactElement } from "react"

const Authenticated: FC = (): ReactElement => {
    const { User, StateRemoveAccount } = useAccountState() as AccountStateType

    return (
        <Fragment>
            <MiniButtonSecondary
                text="Logout"
                props={{onClick: () => StateRemoveAccount()}}
            />

            <UserProfile
                text={User.name || User.email}
                url={User.avatar}
            />
        </Fragment>
    )
}

export default Authenticated