import React from 'react';
import {Image, StyleSheet} from 'react-native';
import { Header as ElementHeader } from 'react-native-elements'
import { View } from 'react-native'

import WhiteLogo800x800 from '../../assets/logos/WhiteLogo800x800.png'

function Header(){
    
    return(       
        <ElementHeader
            centerComponent={
                <View style={style.content}>
                    <Image 
                        style={style.logo}
                        source={WhiteLogo800x800}
                    />
                </View>}
            containerStyle={style.container}
        />
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#000710',
    },

    content: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 90,
        height: 90,
    },

});

export default Header;