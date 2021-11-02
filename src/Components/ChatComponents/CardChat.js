import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, LogBox } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styleCardChat'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function CardChat({Title, Desc, ImageAvatar, Identify}){

    useState(() => {
        if (Platform.OS != "web") {
            LogBox.ignoreAllLogs(true)            
            LogBox.ignoreLogs(['Setting a timer'])
        }
    });

    const navigator = useNavigation()

    function ChatSappy(){
        navigator.navigate('ChatSappy',{nome: Title, identify: Identify})
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => ChatSappy()}>
                <View style={styles.spaceChat}>
                    <View style={styles.cardChat}>
                        <View style={styles.divValuesChat}>
                            <Image source={{uri: ImageAvatar}} style={styles.imageChat} />
                            <View style={styles.divNameDesc}>
                                <Text style={styles.chatName}>{Title}</Text>
                                <Text style={styles.chatDescription}>{Desc}</Text>
                            </View>
                        </View>
                        <View style={styles.containerIcons}>
                            <TouchableOpacity
                                style={styles.iconButton}
                            >
                                <SimpleLineIcons
                                    name="info"
                                    color={'#ccad00'}
                                    size={22}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.iconButton}
                            >
                                <SimpleLineIcons
                                    name="flag"
                                    color={'#ccad00'}
                                    size={22}
                                />
                            </TouchableOpacity>
                        </View>  
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}