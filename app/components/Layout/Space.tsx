import React from 'react'
import {View, StyleSheet} from 'react-native'

interface SpaceProps {
    size: number
}

const styles = StyleSheet.create({
    space: {
        width: '100%',
    },
})

export const Space: React.FC<SpaceProps> = ({size}) => {
    return <View style={[styles.space, {height: size}]}/>
}
