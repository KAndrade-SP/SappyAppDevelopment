import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import firebase from '../../../Config/firebaseconfig'
import styles from './styleProfile'

export default function Profile() {

    const { uid, photoURL } = firebase.auth().currentUser.providerData[0]

    const [nameUser, setNameUser] = useState()
    const [ageUser, setAgeUser] = useState()
    const [isProf, setIsProf] = useState()
    const [area, setArea] = useState()

    useEffect(() => {
        firebase.database()
            .ref(`users/${uid}`)
            .once('value')
            .then(snapshot => {
                const { age, area, isProf, name } = snapshot.val()
                setNameUser(name)
                setAgeUser(age)
                setIsProf(isProf)
                setArea(area)
            });
            
    }, [])

    async function changeData(id, name, age, area, photoUrl) {

        console.log(id, name, age, area, photoUrl)
    
        await firebase.database()
            .ref(`users/${id}`)
            .update({
                name,
                age,
                area,
                photoUrl
            })
            .then(() => {
                alert("Dados alterados com sucesso!")
            });
    
    };

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <Image
                    style={styles.photo}
                    source={{ uri: photoURL }}
                    resizeMode="stretch"
                />

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Nome de Usuário:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={e => setNameUser(e)}
                            maxLength={45}
                            defaultValue={nameUser}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                <View style={styles.contentView}>
                    <View style={styles.contentText}>
                        <Text style={styles.text}>Idade:</Text>
                    </View>
                    <View style={styles.contentInput}>
                        <TextInput
                            onChangeText={a => setAgeUser(a)}
                            maxLength={2}
                            keyboardType={'numeric'}
                            defaultValue={ageUser}
                            style={styles.textInput}
                        />
                    </View>
                </View>

                {isProf == "true"
                    ?
                    <View style={styles.contentView}>
                        <View style={styles.contentText}>
                            <Text style={styles.text}>Área de atuação:</Text>
                        </View>
                        <View style={styles.contentInput}>
                            <TextInput
                                onChangeText={a => setArea(a)}
                                maxLength={45}
                                autoCapitalize='none'
                                defaultValue={area}
                                style={styles.textInput}
                            />
                        </View>
                    </View>
                    :
                    <>
                    </>
                }
            </View>

            <TouchableOpacity
                style={styles.floatButton}
                onPress={() => changeData()}
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