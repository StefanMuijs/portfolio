import {createContext, useContext} from "react";

export const LanguageContext = createContext(false);

export function useEnglish() {
    return useContext(LanguageContext);
}
