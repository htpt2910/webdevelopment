import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return (
      <UserContext.Provider value={auth}>
        {children}
      </UserContext.Provider>
    );
  }

export const useAuth = () => {
    return useContext(UserContext);
  }
  
const fakeAuth = {
isAuthenticated: false,
signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
},
signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
}
};

export const useProvideAuth = () => {
const [user, setUser] = useState(null);

const signin = cb => {
    return fakeAuth.signin(() => {
    setUser("user");
    cb();
    });
};

const signout = cb => {
    return fakeAuth.signout(() => {
    setUser(null);
    cb();
    });
};

return {
    user,
    signin,
    signout
};
}
