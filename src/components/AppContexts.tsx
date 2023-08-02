import { createContext } from "react"

export enum AppTheme {
    Light = "light",Dark = "dark"
}

export const ThemeContext = createContext({theme: AppTheme.Light, setTheme: (_: AppTheme) => {} })