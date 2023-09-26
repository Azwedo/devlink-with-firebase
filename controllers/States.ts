import { FirebaseAuth } from "@/lib";

export const StateSetAccount = (state: any, payload: any) => {
  return {
    ...state,
    User: payload,
    Loading: false,
  };
};

export const StateRemoveAccount = (state: any) => {
  FirebaseAuth.signOut();
  
  return {
    ...state,
    User: false,
    Loading: false,
  };
};
