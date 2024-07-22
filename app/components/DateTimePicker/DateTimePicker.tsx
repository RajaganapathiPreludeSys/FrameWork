import React, {useState} from 'react'
import {
    View,
    Button,
    Platform,
    Modal,
    DatePickerIOS,
    TouchableOpacity,
    Text,
} from 'react-native'

import {styles} from './DateTimePicker.style'

interface Theme {
    primaryColor: string
    modalBackgroundColor: string
    modalTextColor: string
}

interface DateTimePickerProps {
    mode: 'date' | 'time'
    value: Date
    onChange: (date: Date) => void
    theme?: Theme
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
    mode,
    value,
    onChange,
    theme,
}) => {
    const [showPicker, setShowPicker] = useState(false)
    const primaryColor = theme?.primaryColor || '#007bff'
    const modalBackgroundColor =
    theme?.modalBackgroundColor || 'rgba(0, 0, 0, 0.5)'

    const handleDateChange = (event: any, selectedDate: Date) => {
        setShowPicker(Platform.OS === 'ios')
        if (selectedDate) {
            onChange(selectedDate)
        }
    }

    const showDateTimePicker = () => {
        setShowPicker(true)
    }

    const hideDateTimePicker = () => {
        setShowPicker(false)
    }

    return (
        <View>
            <TouchableOpacity onPress={showDateTimePicker}>
                <Text style={[styles.text, {color: primaryColor}]}>
                    {value.toLocaleString()}
                </Text>
            </TouchableOpacity>
            <Modal visible={showPicker} transparent animationType="slide">
                <View
                    style={[
                        styles.modalContainer,
                        {backgroundColor: modalBackgroundColor},
                    ]}
                >
                    <View style={styles.pickerContainer}>
                        {Platform.OS === 'ios' ? (
                            <DatePickerIOS
                                mode={mode}
                                date={value}
                                onDateChange={date => onChange(date)}
                            />
                        ) : (
                            <DateTimePicker
                                value={value}
                                mode={mode}
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                        <Button
                            title="Done"
                            onPress={hideDateTimePicker}
                            color={primaryColor}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
