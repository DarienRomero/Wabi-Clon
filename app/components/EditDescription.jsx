import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button, Overlay } from 'react-native-elements'

export const EditDescription = () => {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    return (
        <View>
            <Button title="Open Overlay" onPress={toggleOverlay} />

            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Text>Hello from Overlay!</Text>
            </Overlay>
        </View>
    )
}
