import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Modal from 'react-native-modal'
import firebase from '../../Config/firebaseconfig'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


function ModalUserList({ open, onClose }) {

    const [list, setList] = useState([])

    async function fetchData() {
        await firebase.database()
            .ref('Users')
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val())
                setList(data.map(({ name, isProf }, key) => {

                    return (
                        <View style={styles.contentUser} key={key}>
                            <Text style={styles.text}>{name}</Text>
                            {isProf == "true"
                                ?
                                <TouchableOpacity
                                    style={styles.iconButton}
                                    onPress={() => {
                                        const keyid = Object.keys(snapshot.val())[key]
                                        console.log(keyid)
                                        changeStatusProf("false", keyid)
                                        alert(`O usuario ${name}, não é mais um Profissional`)
                                        ToastAndroid.show(`O usuario ${name}, não é mais um Profissional`, ToastAndroid.SHORT);
                                    }}
                                >
                                    <SimpleLineIcons
                                        name="check"
                                        color={'#00c853'}
                                        size={22}
                                    />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                    style={styles.iconButton}
                                    onPress={() => {
                                        const keyid = Object.keys(snapshot.val())[key]
                                        console.log(keyid)
                                        changeStatusProf("true", keyid)
                                        alert(`O usuario ${name}, agora é um Profissional`)
                                    }}
                                >
                                    <SimpleLineIcons
                                        name="close"
                                        color={'#ff5131'}
                                        size={22}
                                    />
                                </TouchableOpacity>}
                        </View>
                    )
                }))

            })
    }

    useEffect(() => {
        fetchData()
        return () => { setList([]) }
    }, [])

    async function changeStatusProf(isProf, id) {

        await firebase.database()
            .ref(`Users/${id}`)
            .update({
                isProf,
            }).then(fetchData())

    }

    return (
        <View style={styles.container}>
            <Modal
                isVisible={open}
                onBackButtonPress={onClose}
                animationIn={"bounceInUp"}
                animationOut={"bounceOutDown"}
                animationOutTiming={800}
                animationInTiming={800}
                backdropOpacity={0}
                style={styles.modal}
            >
                <View style={styles.containerModal}>
                    <View style={styles.containerUser}>
                        {list}
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'flex-start'
    },

    modal: {
        width: 'auto',
        borderRadius: 20,
        backgroundColor: '#484848',
        justifyContent: 'flex-start',
        paddingTop: 16
    },

    button: {
        backgroundColor: '#000710',
        borderRadius: 10,
        height: 50,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerUser: {
        backgroundColor: '#000710',
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 16,
        borderBottomWidth: 0.2,
        borderBottomColor: '#f5f5f540',
        marginTop: 10,
        paddingHorizontal: 8,
    },

    contentUser: {
        flexDirection: "row",
        paddingTop: 8,
        paddingLeft: 12,
        marginBottom: 8,

    },

    containerModal: {
        paddingStart: 12,
        paddingEnd: 12,
    },

    iconButton: {
        alignItems: 'flex-end',
        flex: 1,
    },

    text: {
        color: '#f5f5f5',
        fontSize: 16,
    }
})

export default ModalUserList;