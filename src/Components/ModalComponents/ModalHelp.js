import React from "react"
import { TouchableOpacity, Text, View, StyleSheet } from "react-native"
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
                style={styles.containerModal}
            >
                <Text style={styles.titleText}>COMO USAR</Text>

                <Text style={styles.normalText}>
                    O Naruto pode ser um pouco duro às vezes,
                    talvez você não saiba disso, mas o Naruto também cresceu sem pai.
                    Na verdade ele nunca conheceu nenhum de seus pais,
                    e nunca teve nenhum amigo em nossa aldeia.
                    Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido,
                    ele está sempre disposto a melhorar, ele quer ser respeitado,
                    é o sonho dele e o Naruto daria a vida por isso sem hesitar.
                    Meu palpite é que ele se cansou de chorar e
                    decidiu fazer alguma coisa a respeito!
                </Text>

                <Text style={styles.titleText}>CONTATO</Text>

                <Text style={styles.footerTitle}>E-mail:
                    <Text style={styles.footerText}>
                        ⠀Safety2dsntcc@gmail.com
                    </Text>
                </Text>

                <Text style={styles.footerTitle}>Telefone:
                    <Text style={styles.footerText}>
                        ⠀11 96813-9649
                    </Text>
                </Text>

                <Text style={styles.footerTitle}>Endereço: 
                    <Text style={styles.footerText}>
                        ⠀Santo Eduardo - Embu das Artes
                    </Text>
                </Text>
                
                <Text style={styles.footerTitle}>Autor:
                    <Text style={styles.footerText}>
                        ⠀Nobru apelo
                    </Text>
                </Text> 

                <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onClose}
                >
                    <Text style={styles.normalText}>Fechar</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { position: 'absolute' },

    containerModal: {
        width: "90%",
        borderRadius: 20,
        backgroundColor: '#212121',
        paddingStart: 12,
        paddingEnd: 12,
    },

    containerButton: {
        alignItems: 'center',
        paddingTop: 25,
    },

    button: {
        backgroundColor: '#00c85330',
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center'
    },

    footerText: {
        color: '#f5f5f5',
        fontSize: 14,
        fontWeight: 'normal',
    },

    footerTitle: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },

    titleText: {
        color: '#f5f5f5',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },

    normalText: {
        color: '#f5f5f5',
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'justify'
    },

})

export default ModalHelp;