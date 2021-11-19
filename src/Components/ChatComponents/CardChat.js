import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, LogBox } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ModalUserImage from '../ModalComponents/ModalUserImage';

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
    const [openImage, setOpenImage] = useState(false)

    function ChatSappy(){
        navigator.navigate('ChatSappy',{nome: Title, identify: Identify})
    }

    function pressImage(){
       setOpenImage(!openImage) 
    }


    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => ChatSappy()}>
                <View style={styles.spaceChat}>
                    <View style={styles.cardChat}>
                        <View style={styles.divValuesChat}>
                            <TouchableOpacity onPress={ () => {pressImage()}}>
                                <Image source={{uri: ImageAvatar}} style={styles.imageChat} />
                            </TouchableOpacity>
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
            <ModalUserImage 
                open={openImage} 
                onClose={() => 
                    setOpenImage(false)} 
                ImageAvatar={ImageAvatar} 
                Title={Title}
                Desc={Desc}
            />
        </View>
    );
}