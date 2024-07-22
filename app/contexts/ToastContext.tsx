import React, {PropsWithChildren, createContext, useContext, useState} from 'react'
import {View} from 'react-native'

import {Toast} from '../components/Toast'

interface Theme {
    colors: {
        background: string
        text: string
    }
}

interface ToastContextType {
    showToast: (message: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}

interface ToastProviderProps {
    theme?: Theme
}

export const ToastProvider: React.FC<PropsWithChildren<ToastProviderProps>> = ({children, theme}) => {
    const [toast, setToast] = useState<{message: string; duration?: number} | null>(null)

    const showToast = (message: string, duration = 3000): void => {
        setToast({message, duration})
        setTimeout(() => {
            setToast(null)
        }, duration)
    }

    const toastTheme = theme ?? {
        colors: {
            background: '#333',
            text: '#fff',
        },
    }

    return (
        <ToastContext.Provider value={{showToast}}>
            {children}
            {toast && (
                <View style={{position: 'absolute', bottom: 50, left: 0, right: 0}}>
                    <Toast message={toast.message} duration={toast.duration} theme={toastTheme.colors}/>
                </View>
            )}
        </ToastContext.Provider>
    )
}
