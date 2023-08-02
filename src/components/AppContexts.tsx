import { createContext } from "react"
import { lightTheme } from "./Themes"
import { Theme } from "@mui/material"

export const ThemeContext = createContext({theme: lightTheme, setTheme: (_: Theme) => {} })