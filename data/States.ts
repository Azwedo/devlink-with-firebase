import { create } from "zustand";
import { StateRemoveAccount, StateSetAccount } from "@/controllers/States";

export const useAccountState = create(
    (set) =>
    (
        {
            User: null,
            Loading: true,
            StateSetAccount: (payload: any) => set((state: any) => StateSetAccount(state, payload)),
            StateRemoveAccount: () => set((state: any) => StateRemoveAccount(state)),
        }
    )
);
