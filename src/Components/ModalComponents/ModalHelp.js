import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, TextInput, ToastAndroid } from "react-native";
import Modal from 'react-native-modal'

function ModalHelp({ open, onClose }) {

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
                <Text style={styles.text}>
                    TEXTO PARA AJUDAR E TALS
                </Text>

                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onClose()}
                    >
                        <Text style={styles.text}>Cancelar</Text>
                    </TouchableOpacity>
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

    button: {
        flex: 1,
        backgroundColor: '#00c85392',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
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

export default ModalHelp;