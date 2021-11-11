import React, { useEffect, useState } from "react"
import { TouchableOpacity, Text, View, StyleSheet, TextInput, ToastAndroid } from "react-native"
import Modal from 'react-native-modal'
import firebase from '../../Config/firebaseconfig'
import { useNavigation } from '@react-navigation/native'

function ModalDisableUser({ open, onClose }) {
    const navigation = useNavigation()

    // Constantes para armazenar senha do banco, e senhas digitadas.
    const [DBPass, setDBPass] = useState()
    const [firstPass, setFirstPass] = useState()
    const [secondPass, setSecondPass] = useState()

    // Pegando id do usuário atual.
    const { uid } = firebase.auth().currentUser.providerData[0]

    // Função para pegar senha do usuário atual, no banco.
    async function fetchData() {
        await firebase.database()
            .ref(`Users/${uid}`)
            .once('value')
            .then(snapshot => {
                const { securityPassword } = snapshot.val()
                setDBPass(securityPassword)
            })
    }

    // Carrega a função fetchData, para setar a senha do banco.
    useEffect(() => {
        let isMounted = true
        if(isMounted) fetchData()
        return () => { isMounted = false }
    }, [])

    // Função para retornar a tela de login. Usada quando o usuário desativar a conta.
    const signOutFirebase = async () => {
        await firebase.auth().signOut().then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        })
    }

    // Função para desativar o usuário atual.
    async function disableUser() {
        // Validando senhas digitadas com a do banco.
        const validInp = firstPass == secondPass ? true : false
        const validDB = firstPass == DBPass ? true : false

        // Desativação é realizada quando a validação for satisfeita.
        if (validDB === true && validInp === true) {
            // Pega o usuário atual.
            const { uid } = firebase.auth().currentUser.providerData[0]

            // Remove dados do usuário atual, no banco.
            firebase.database().ref(`Users/${uid}`).remove()

            // Remove login do usuário.
            firebase.auth().currentUser.delete().then(() => {
                ToastAndroid.show("Sua conta foi desativada", ToastAndroid.LONG)
            })
            signOutFirebase() // Função para retornar a tela de login.
        
        } else ToastAndroid.show("As senhas não iguais", ToastAndroid.SHORT)
        

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
                    <Text style={styles.title}>Você deseja realmente deletar sua conta?</Text>

                    <TextInput
                        onChangeText={e => setFirstPass(e)}
                        style={styles.textInp}
                        maxLength={45}
                        defaultValue=''
                        placeholder='Insira sua senha de segurança'
                        placeholderTextColor='#f5f5f550'
                        secureTextEntry={true}
                    />
                    <TextInput
                        onChangeText={e => setSecondPass(e)}
                        style={styles.textInp}
                        maxLength={45}
                        defaultValue=''
                        placeholder='Confirme sua senha de segurança'
                        placeholderTextColor='#f5f5f550'
                        secureTextEntry={true}
                    />
                    <View style={styles.containerButton}>
                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={disableUser}
                        >
                            <Text style={styles.text}>Sim</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={onClose}
                        >
                            <Text style={styles.text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 1
    },
    containerModal: {
        width: '100%',
        height: 350,
        borderRadius: 20,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 12,
        paddingEnd: 12,
    },

    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    confirmButton: {
        flex: 1,
        backgroundColor: '#00c85392',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        marginRight: 16,
    },

    cancelButton: {
        flex: 1,
        backgroundColor: '#ff513192',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 150,
        marginLeft: 16,
    },

    textInp: {
        color: '#f5f5f5',
        fontSize: 14,
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        width: "100%",
        marginTop: 12,
        marginBottom: 12
    },

    containerButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 12,
        marginBottom: 12,
        marginRight: 12,
        marginLeft: 12,
    },

    text: {
        color: '#f5f5f5',
        fontSize: 14,
    },

    title: {
        alignSelf: 'center',
        color: '#f5f5f5',
        fontSize: 16,
    },
})

export default ModalDisableUser;