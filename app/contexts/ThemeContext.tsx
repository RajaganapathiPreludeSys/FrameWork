// ThemeContext.tsx
import React, {PropsWithChildren, createContext, useContext, useState} from 'react'

import {Theme} from '../themes/themes'

interface ThemeContextType {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<PropsWithChildren<{initialTheme: Theme}>> = ({initialTheme, children}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
