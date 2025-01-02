import { createContext, PropsWithChildren, useContext, useState } from "react"

enum StateTest{
    'cheking',
    'login',
    'closed',
    'authenticated'
}

interface AuthState{
    state: StateTest,
    showEmail: string,
    logingEmailWithPassword: (email: string, password: string) => void
    logout: () => void 
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren ) => {

    const [state, setState] = useState<StateTest>(StateTest.cheking)

    const [showEmail,setShowEmail] = useState("")

    const logingEmailWithPassword = (email: string, password: string) => {
        setState(StateTest.login)
        setShowEmail(email)
    }

    const logout = () => {
        setState(StateTest.closed)
    }

  return (
    <AuthContext.Provider value= {{
        state: state,
        showEmail,
        logingEmailWithPassword,
        logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}
