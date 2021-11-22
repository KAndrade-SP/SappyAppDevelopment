import React from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"
import Modal from 'react-native-modal'

function ModalHelp({ open, onClose }) {

    return (
        <View>
            <Modal
                isVisible={open}
                onBackButtonPress={onClose}
                onBackdropPress={onClose}
                animationIn={"bounceInUp"}
                animationOut={"bounceOutDown"}
                animationOutTiming={800}
                animationInTiming={800}
                backdropOpacity={0}
                style={{ alignItems: 'center' }}
            >
                <View style={styles.viewModal}>
                    <ScrollView>
                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Grupos</Text>
                            <Text style={styles.descText}>
                                Um espaço para conhecer pessoas com situações iguais ou semelhantes.
                                {'\n'}Essa área é monitorada por moderadores que estarão aptos a tomar alguma 
                                atitude, caso necessária.
                                {'\n'}Basta escolher um grupo desejado, logo em seguida acessar e enviar mensagens.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Profissionais</Text>
                            <Text style={styles.descText}>
                                Um espaço para conversar com pessoas especializadas no assunto, que poderão 
                                ajudá-lo(a) de forma semelhante a de uma consulta real.
                                {'\n'}Clique em um profissional para enviar mensagens.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Configurações</Text>
                            <Text style={styles.descText}>
                                Nesta área, você poderá alterar dados básicos do perfil e checar informações 
                                para contato, além de poder realizar o logoff do aplicativo.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Como se tornar um profissional?</Text>
                            <Text style={styles.descText}>
                                Será necessário comprovar sua profissão através de CRM, RG, CPF, Diplomas/Certificados e 
                                detalhes de experiência de trabalho. 
                                {'\n'}Cheque as informações de contato e envie um e-mail com os documentos requisitados
                                para realizar a solicitação, assim que possível retornaremos com uma resposta.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Um profissional responderá rapidamente?</Text>
                            <Text style={styles.descText}>
                                A ideia é que todos nossos colaboradores consigam responder um chamado rapidamente, 
                                mas aconselhamos que caso um profissional não o atenda no tempo esperado envie 
                                mensagem para outros que poderão estar disponíveis.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Como os grupos são criados?</Text>
                            <Text style={styles.descText}>
                                Todos os grupos são criados e gerenciados somente pelos administradores do aplicativo 
                                que possuem acesso privilegiado a determinadas funcionalidades do aplicativo.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Nível de segurança</Text>
                            <Text style={styles.descText}>
                                Os profissionais e administradores do aplicativo estarão sempre dispostos a combater 
                                alguma atitude indevida percebida em algum grupo, em versões futuras a segurança será 
                                mais aprimorada para garantir um espaço ainda mais confortável e seguro.
                            </Text>
                        </View> 

                        <View style={styles.containerText}>
                            <Text style={styles.titleText}>Denúncias</Text>
                            <Text style={styles.descText}>
                                Caso perceba alguma atitude indevida vinda de um profissional colaborador, clique 
                                no ícone de perfil do mesmo e em seguida no ícone de denúncias para reportar esse profissional.
                            </Text>
                        </View>

                        <View style={styles.lastContainerText}>
                            <Text style={styles.titleText}>Informações de profissionais</Text>
                            <Text style={styles.descText}>
                                Caso queira checar informações detalhadas de um profissional, clique no ícone de perfil 
                                do mesmo e em seguida no ícone de informações para ver os detalhes deste profissional.
                            </Text>
                        </View>
                    </ScrollView>
                </View>          
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

    viewModal: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingBottom: 4,
        height: 400, 
        width: 300,
        backgroundColor:'#212121',
        borderRadius: 10,   
        flexDirection: 'column',
    },

    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 8,
        marginBottom: 6,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f5f5f580'
    },

    lastContainerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 8,
    },

    titleText: {
        marginLeft: 12,
        marginRight: 12,
        color: "#f5f5f5",
        fontSize: 16,
        textAlign: 'center',
    },

    descText: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 2,
        marginBottom: 2,
        color: "#f5f5f580",
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 18
    },

})

export default ModalHelp;