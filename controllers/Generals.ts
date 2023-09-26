let authMode: null | 'login' | 'logout' = null;

export const Authenticator = async (user: any, StateAccount: AccountStateType) => {
   const { StateSetAccount, StateRemoveAccount } = StateAccount as AccountStateType;

   if(authMode === null){
      if(user) {
         const state = {
            name: user.displayName,
            email: user.email,
            avatar: user.photoURL,
         } as User

         StateSetAccount(state);

         authMode = 'logout';
      } 
      
      else {
         StateRemoveAccount();
         authMode = 'login';
      }
   } 
   
   else {
      if(authMode === 'login' && user) {
         StateSetAccount(user);
         authMode = 'logout';
      } 
      
      else if(authMode === 'logout' && !user) {
         StateRemoveAccount();
         authMode = 'login';
      }
   }
}
