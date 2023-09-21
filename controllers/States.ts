export const StateSetAccount = (state: any, payload: any) => {
    return {
        ...state,
        User: payload,
        Loading: false,
        Auth: true,
    }
};

export const StateRemoveAccount = (state: any) => {
    return {
        ...state,
        User: null,
        Loading: false,
        Auth: false,
    }
};