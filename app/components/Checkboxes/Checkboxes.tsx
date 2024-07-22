import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'

import {styles} from './Checkboxes.style'

interface Option {
    label: string
    value: string
}

interface CheckboxesProps {
    options: Option[]
    selectedValue: string | string[]
    onValueChange: (value: string | string[]) => void
    mode?: 'single' | 'multiple'
}

export const Checkboxes: React.FC<CheckboxesProps> = ({options, selectedValue, onValueChange, mode = 'single'}) => {
    const handleToggle = (value: string): void => {
        if (mode === 'multiple') {
            const isSelected = (selectedValue as string[]).includes(value)
            const updatedValue = isSelected
                ? (selectedValue as string[]).filter((item) => item !== value)
                : [...(selectedValue as string[]), value]
            onValueChange(updatedValue)
        } else {
            onValueChange(value)
        }
    }

    const isChecked = (value: string): boolean => {
        if (mode === 'multiple') {
            return (selectedValue as string[]).includes(value)
        } else {
            return selectedValue === value
        }
    }

    return (
        <View>
            {options.map((option, index) => (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => handleToggle(option.value)}>
                    <View style={styles.container}>
                        <View style={[styles.checkbox, isChecked(option.value) ? styles.checked : null]}/>
                        <Text style={styles.label}>{option.label}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}
