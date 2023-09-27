type ChildrenProp = {
    children: React.ReactNode
}

type HeaderNavigationType = {
    name: string
    href: string
}

type FooterListItemType={
    name: string,
    href: string
}

type FooterListType = {
    title: string
    items: FooterListItemType[]
}


type AccountStateType = {
    User: User
    Loading: boolean
    StateSetAccount: (payload: any) => void
    StateRemoveAccount: () => void
}