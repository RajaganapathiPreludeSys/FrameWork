import React, {PropsWithChildren, createContext, useContext, useState} from 'react'

import {LoadingIndicator} from '../components/Loader/LoadingIndicator'

interface LoadingContextType {
    showLoading: () => void
    hideLoading: () => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export const useLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext)
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider')
    }
    return context
}

interface LoadingProviderProps {
    theme?: {
        indicatorColor?: string
        backgroundColor?: string
    }
}

export const LoadingProvider: React.FC<PropsWithChildren<LoadingProviderProps>> = ({
    children,
    theme,
}) => {
    const [loading, setLoading] = useState(false)

    const showLoading = (): void => {
        setLoading(true)
    }

    const hideLoading = (): void => {
        setLoading(false)
    }

    const indicatorColor = theme?.indicatorColor || '#0000ff'
    const backgroundColor = theme?.backgroundColor || 'rgba(0, 0, 0, 0.3)'

    return (
        <LoadingContext.Provider value={{showLoading, hideLoading}}>
            {children}
            {loading && (
                <LoadingIndicator
                    indicatorColor={indicatorColor}
                    backgroundColor={backgroundColor}
                />
            )}
        </LoadingContext.Provider>
    )
}
