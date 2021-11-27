import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, TextInput, View, StyleSheet } from "react-native";
import Modal from 'react-native-modal'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../../Config/firebaseconfig'

function ModalReportUser({open, onClose, Identify}){

    const [validProf, setValidProf] = useState(false)    

    function validator() {
        firebase.database()
            .ref(`Users`)
            .once('value')
            .then(snapshot => {
                console.log()
                const data = Object.values(snapshot.val()) // Pegando todos os dados.
                data.map(({isProf}, key) => {
                    // Setar cardChat com os valores, caso a validação for verdadeira. 
                    if (data[key].email == Identify && data[key].isProf == "true"){
                        setValidProf(true)                       
                    }                             
                })
                                
            })
    }

    useEffect(() => {
        if(open) validator()
        return () => {}
    })

    return (
        <View>            
            <Modal isVisible = {open} 
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
                            <Text style={styles.chatNameModal}>{ validProf == true ? "Reportar profissional" : "Reportar Usuário"}</Text>
                        </View>
                        <View style={styles.perfilViewModal}>
                            <View style={styles.contentText}>
                                <Text style={styles.text}>Motivo da Denúncia:</Text>
                            </View>
                            <View style={styles.contentInput}>
                                <TextInput                                
                                    maxLength={20}
                                    autoCapitalize='none'                            
                                    style={styles.textInput}
                                />
                            </View>
                            <View style={styles.contentText}>
                                <Text style={styles.text}>Descrição da Denúncia:</Text>
                            </View>
                            <View style={styles.contentInputDesc}>
                                <TextInput                                
                                    maxLength={100}
                                    multiline
                                    numberOfLines={3}                    
                                    style={styles.textInput}
                                />
                            </View>

                            <View style={styles.containerButton}>
                                <TouchableOpacity style={styles.floatButton}>
                                    <SimpleLineIcons name="check" color={'#f5f5f5'} size={20}/>
                                    <Text style={styles.textButton}>Enviar denúncia</Text>
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
        height: 350, 
        width: 300,
        backgroundColor:'#171717',
        borderRadius: 10,   
    },

    containerTitle: {
        height: 40,
        width: 300,
        paddingHorizontal: 25,
        backgroundColor: '#000710',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
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
        justifyContent: 'flex-start',
    },

    contentInput: {
        height: 50,
        backgroundColor: '#000710',
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 8,
        paddingLeft: 12
    },

    contentInputDesc: {
        height: 90,
        backgroundColor: '#000710',
        paddingEnd: 8,
        paddingStart: 8,
        paddingBottom: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        marginTop: 4,
        marginBottom: 8,
        paddingLeft: 12
    },

    textInput: {
        color: '#f5f5f5',
        fontSize: 16,
        flex: 1,
    },

    text: {
        color: '#f5f5f5',
        fontSize: 16,
    },

    containerButton: {
        alignItems: 'center'
    },

    textButton: {
        color: '#f5f5f5',
        paddingLeft: 8,
    },

    floatButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 200,
        height: 50,        
        backgroundColor: '#000710',
        borderRadius: 100,
        marginTop: 10,
    },
})

export default ModalReportUser;