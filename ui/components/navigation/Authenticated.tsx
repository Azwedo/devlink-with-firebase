'use client'

import Link from "next/link"

import { FC, Fragment, ReactElement } from "react"
import { useAccountState } from "@/data"
import { MiniButtonSecondary, UserProfile } from "@/ui/webflow"
import { AccountStateType } from "@/ts/Types"

const Authenticated: FC = (): ReactElement => {
    const { User, StateRemoveAccount } = useAccountState() as AccountStateType

    return (
        <Fragment>
            <MiniButtonSecondary
                text="Logout"
                props={{onClick: () => StateRemoveAccount()}}
            />

            <Link href="/profile">
                <UserProfile 
                    text={User === false || User === null ? '' : User.name || User.email} 
                    url={User === false || User === null ? '' : User.avatar} 
                />
            </Link>
        </Fragment>
    )
}

export default Authenticated