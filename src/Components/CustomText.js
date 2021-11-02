import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

function TextCustom({ValueText, style}) {

    const [assetsLoaded, setAssetsLoaded] = useState(false)

    const styles = StyleSheet.create({
        defaultStyle: {
            fontFamily: 'roboto-medium'
        },
        text: {
            fontFamily: 'roboto-medium',
            ...style
        },
    })

    async function requireFont() {
        await Font.loadAsync({
            'roboto-medium': require('../../assets/fonts/Roboto-Medium.ttf'),
        });
        setAssetsLoaded( true );
    }

    useEffect(() => {
        requireFont()
    })

    if (!assetsLoaded) {
        return <ActivityIndicator />
    } else {
        return (
            <>
                <Text style={[styles.defaultStyle, styles.text]}>{ValueText}</Text>
            </>
        );
    };

};


export { TextCustom }
