import { FC, ReactElement } from "react"
import { Button } from "@/ui/webflow"
import { AuthWithGoogle } from "@/controllers"
import { useAccountState } from "@/data"

const Unauthenticated: FC = (): ReactElement => {
    const { StateSetAccount } = useAccountState() as AccountStateType

    return (
        <Button props={{onClick: () => AuthWithGoogle(StateSetAccount)}} show={true} >
            Login with Google
        </Button>
    )
}

export default Unauthenticated