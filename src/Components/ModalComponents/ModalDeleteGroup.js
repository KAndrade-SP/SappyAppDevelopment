import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, Image, View, StyleSheet } from "react-native";
import Modal from 'react-native-modal'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../Config/firebaseconfig'

function ModalDeleteGroup({ open, onClose, ImageGp, Title, Identify }) {

    const [validProf, setValidProf] = useState(false)

    function validator() {
        firebase.database()
            .ref(`Users`)
            .once('value')
            .then(snapshot => {

                const data = Object.values(snapshot.val()) // Pegando todos os dados.
                data.map(({ isProf }, key) => {
                    // Setar cardChat com os valores, caso a validação for verdadeira. 
                    if (data[key].email == Identify && data[key].isProf == "true") {
                        setValidProf(true)
                    }
                })

            })
    }

    useEffect(() => {
        if (open) validator()
        return () => { }
    })

    return (
        <View>
            <Modal isVisible={open}
                animationIn={"bounceInUp"}
                animationOut={"bounceOutDown"}
                animationOutTiming={800}
                animationInTiming={800}
                onBackdropPress={onClose}
                onBackButtonPress={onClose}
                style={{ alignItems: 'center', flex: 1 }}
                backdropOpacity={0}>

                <View style={styles.viewModal}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={styles.containerTitle}>
                            <Text style={styles.chatNameModal}>Excluir grupo</Text>
                        </View>
                        <Image
                            style={styles.photo}
                            source={{ uri: ImageGp }}
                            resizeMode="stretch"
                        />
                        <Text style={styles.nameGroup}>{Title}</Text>
                        <View style={styles.perfilViewModal}>
                            <View style={styles.contentText}>
                                <Text style={styles.text}>Deseja excluir esse grupo?</Text>
                            </View>
                            <View style={styles.containerButton}>
                                <TouchableOpacity style={styles.floatButtonCancel}
                                    onPress={onClose}
                                >
                                    <SimpleLineIcons name="check" color={'#f5f5f5'} size={20} />
                                    <Text style={styles.textButton}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.floatButtonDelete}
                                    onPress={() => {
                                        firebase.database()
                                        .ref(`Grupos/${Title}`)
                                        .remove()
                                        onClose()
                                    }}
                                >
                                    <SimpleLineIcons name="close" color={'#f5f5f5'} size={20} />
                                    <Text style={styles.textButton}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    viewModal: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        backgroundColor: '#171717',
        borderRadius: 10,
    },

    containerTitle: {
        height: 40,
        width: 300,
        paddingHorizontal: 25,
        paddingBottom: 4,
        backgroundColor: '#000710',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },

    chatNameModal: {
        fontSize: 16,
        color: '#f5f5f5',
    },

    perfilViewModal: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
    },

    contentText: {
        paddingBottom: 8,
        paddingTop: 12,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    text: {
        color: '#f5f5f580',
        fontSize: 16,
    },

    nameGroup: {
        color: '#ccad00',
        fontSize: 20,
    },

    containerButton: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#171717',
    },

    textButton: {
        color: '#f5f5f5',
        paddingLeft: 8,
    },

    floatButtonCancel: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 130,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 100,
        marginTop: 12,
        marginRight: 6,
    },

    floatButtonDelete: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 130,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: 12,
        marginLeft: 6,
    },

    photo: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 70,
        marginBottom: 12,
        marginTop: 12,
    },
})

export default ModalDeleteGroup;