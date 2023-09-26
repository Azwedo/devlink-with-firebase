type ChildrenProp = {
    children: React.ReactNode
}

type HeaderNavigationType = {
    name: string
    href: string
}

type AccountStateType = {
    User: User
    Loading: boolean
    StateSetAccount: (payload: any) => void
    StateRemoveAccount: () => void
}