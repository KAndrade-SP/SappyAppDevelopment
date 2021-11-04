import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styleCardGroup';

export default function CardGroup({ Title, Desc, ImageGp }) {

    const navigator = useNavigation()

    function chatGroup() {
        navigator.navigate('ChatGroup', { title: Title })
    }

    return (
        <View style={styles.container}>
            <View style={styles.spaceGroup}>
                <View style={styles.cardGroup}>
                    <View style={styles.divValuesGroup}>
                        <Image source={{ uri: ImageGp }} style={styles.imageGroup} />
                        <View style={styles.divNameDesc}>
                            <Text style={styles.groupName}>{Title}</Text>
                            <Text style={styles.groupDescription}>{Desc}</Text>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity
                                style={styles.enterButton}
                                onPress={() => chatGroup()}
                            >
                                <Text style={styles.text}>Acessar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}