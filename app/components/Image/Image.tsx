import React, {useState} from 'react'
import {
    Image as RNImage,
    ActivityIndicator,
    ImageProps as RNImageProps,
    View,
    Text,
} from 'react-native'

import {styles} from './Image.style'

interface Theme {
    errorTextColor: string
}

interface ImageProps extends RNImageProps {
    // source: string | {uri: string}
    onError?: () => void
    errorComponent?: JSX.Element // Allow custom error component
    theme?: Theme // Theme prop for customizing error text color
}

export const Image: React.FC<ImageProps> = ({
    source,
    onError,
    errorComponent,
    theme,
    ...rest
}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const primaryColor = theme?.errorTextColor || 'red' // Default error text color

    const onLoadStart = (): void => {
        setLoading(true)
        setError(false)
    }

    const onLoadEnd = (): void => {
        setLoading(false)
    }

    const onErrorHandler = (): void => {
        setError(true)
        if (onError) {
            onError()
        }
    }

    const renderErrorComponent = (): JSX.Element => {
        if (errorComponent) {
            return errorComponent
        }
        return (
            <Text style={[styles.errorText, {color: primaryColor}]}>
        Error loading image. Please try again later.
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#0000ff"/>}
            {error && renderErrorComponent()}
            {!loading && !error && (
                <RNImage
                    source={typeof source === 'string' ? {uri: source} : source}
                    onLoadStart={onLoadStart}
                    onLoadEnd={onLoadEnd}
                    onError={onErrorHandler}
                    {...rest}
                />
            )}
        </View>
    )
}
