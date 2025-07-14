import {createContext, useContext} from "react";


export const ThemeContext = createContext({

    theamMode: "Light",
    darkTheam:  () => {},
    lightTheam: () => {},

})

export const ThemeProvider = ThemeContext.Provider
export default function useThema(){
    return useContext(ThemeContext);
} 