import { CheckAuth } from "."

export const Authenticator = async (StateSetAccount: any, StateRemoveAccount: any) => {
    const user = await CheckAuth()

    console.log(user)

    if(user !== null) StateSetAccount()
    else StateRemoveAccount()
}