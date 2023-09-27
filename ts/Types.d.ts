type ChildrenProp = {
    children: React.ReactNode
}

type HeaderNavigationType = {
    name: string
    href: string
}

type FooterNavigationItemType={
    name: string,
    href: string
}

type FooterNavigationType = {
    title: string
    items: FooterNavigationItemType[]
}


type AccountStateType = {
    User: User
    Loading: boolean
    StateSetAccount: (payload: any) => void
    StateRemoveAccount: () => void
}