import React,{createContext} from "react";

export interface AuthContextInterface {
    
    email?: string,
    senha?: string

}
export const AuthContext = createContext<AuthContextInterface | null>(null) 