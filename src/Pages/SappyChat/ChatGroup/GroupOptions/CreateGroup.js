import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, ToastAndroid } from "react-native"

import { useNavigation } from '@react-navigation/native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import firebase from "../../../../Config/firebaseconfig"

import styles from './StyleCreateGroup'

export default function CreateGroup() {
    const navigation = useNavigation()

    const [Picture, setPicture] = useState()
    const [Title, setTitle] = useState()
    const [Description, setDescription] = useState()

    async function Create() {
        if (Picture != null || Title != null || Description != null) {
            await firebase.database()
                .ref(`Grupos/${Title}`)
                .update({
                    Description,
                    Picture
                })
                .then(() => {
                    ToastAndroid.show("Grupo criado com sucesso!", ToastAndroid.SHORT)
                    navigation.navigate('Home')
                })
        } else {
            ToastAndroid.show("Preencha todos os campos!", ToastAndroid.SHORT)
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Imagem do Grupo:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={e => setPicture(e)}
                            maxLength={255}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Nome do Grupo:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={e => setTitle(e)}
                            maxLength={45}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Descrição:</Text>
                    </View>
                    <View style={styles.contentInputDesc}>
                        <TextInput
                            onChangeText={a => setDescription(a)}
                            maxLength={255}
                            multiline={true}
                            style={styles.textInput}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.floatButton}
                onPress={Create}
            >
                <SimpleLineIcons
                    name="pencil"
                    color={'#f5f5f5'}
                    size={22}
                />
            </TouchableOpacity>

        </View>
    )
}