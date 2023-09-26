import { SignOut } from "@/controllers";

export const StateSetAccount = (state: any, payload: any) => {
    console.log('run 2')

    return {
        ...state,
        User: payload,
        Loading: false
    }
};

export const StateRemoveAccount = (state: any) => {
    // SignOut()
    console.log('run')
    return {
        ...state,
        User: null,
        Loading: false,
        Auth: false,
    }
};