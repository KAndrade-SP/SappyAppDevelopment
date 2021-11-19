import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, Text, TextInput, View, Image, StyleSheet, ScrollView } from "react-native";
import Modal from 'react-native-modal'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../../Config/firebaseconfig'

function ModalReportUser({open, onClose, Title, Desc}){


    return (
        <View>            
            {/*This model will be called when the user clicks on an image */}
            <Modal isVisible = {open} 
                animationIn={"bounceInUp"}
                animationOut={"bounceOutDown"}
                animationOutTiming={800}
                animationInTiming={800} 
                onBackdropPress={onClose}  
                style={{alignItems:'center'}}
                backdropOpacity={0}              
            >
                <View style={styles.viewModal}>
                    <View style={styles.perfilViewModalTitle}>                            
                        <Text style={styles.chatNameModal}>Reportar Profissional</Text>
                    </View>
                    <View style={styles.perfilViewModal}>
                        <View style={styles.contentText}>
                            <Text style={styles.text}>Motivo da Denúncia:</Text>
                        </View>
                        <View style={styles.contentInput}>
                            <TextInput                                
                                maxLength={45}
                                autoCapitalize='none'                            
                                style={styles.textInput}
                            />
                        </View>
                        <View style={styles.contentText}>
                            <Text style={styles.text}>Descrição da Denúncia:</Text>
                        </View>
                        <View style={styles.contentInput}>
                            <TextInput                                
                                maxLength={45}
                                autoCapitalize='none'                            
                                style={styles.textInput}
                            />
                        </View>

                        <TouchableOpacity style={styles.floatButton}>
                            <Text>Enviar Denúncia</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageChat: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 0.2,
        borderColor: 'gray'
    },

    imageChatModal: {
        height:150, 
        width: 150, 
        marginLeft: 80,
        borderWidth: 0.2,
        backgroundColor: '#1c1c1c',        
    },

    viewModal: {
        marginTop: 195, 
        height: 355, 
        width: 310,
        backgroundColor:'#212121',
        marginBottom: 327,
        borderRadius: 2,    
    },

    perfilViewModal: {
        width: 310, 
        height: 150,
        paddingLeft: 10                 
    },

    perfilViewModalTitle:{
        height: 35, 
        width: 310,         
        alignItems:'center',
        backgroundColor:'hsla(0, 0%, 0%, 0.3)',                
    },

    descriptionViewModal: {
        width: 310,
        height: 243,
        alignItems: 'center',
        opacity: 1,
        paddingLeft: 10,
        paddingRight: 10       
    },

    chatName: {
        fontSize: 16,
        color: '#ffffff'
    },    

    chatProfession: {
        fontSize: 12,
        color: '#ffffff80',
        fontStyle: 'italic'
    },

    chatNameModal: {
        fontSize: 20,
        color: '#ffffff',
        paddingLeft: 5                
    },

    evaluationModal: {
        width: 310,
        height: 70,
        borderColor: 'black',
        paddingTop: 6,
        paddingLeft: 10,
        backgroundColor: '#171717',                
        alignItems: 'baseline',
        flexDirection:'row',
    },

    infoEvaluationModal:{        
        width: 310,
        position: 'absolute',
        marginTop: 40,
        paddingLeft: 10,
        flexDirection:'row',            
    },

    evaluationTextTitle:{
        fontSize: 18,
        color: '#ffffff',
        paddingRight: 10
    },

    evaluationText:{
        fontSize: 18,
        color: '#ffffff80',
        paddingRight: 65,
    },

    iconStar:{
        backgroundColor: 'white'
    },

    iconModalReport: {
        width: 155,
        height: 50,
        borderColor: 'black',
        paddingTop: 6,
        backgroundColor: '#1f1f1f',
        position: 'absolute',
        marginTop:150,
        marginLeft: 155,
        alignItems: 'center'
    },

    chatProfessionModal: {
        fontSize: 16,
        color: '#ffffff80',
        fontStyle: 'italic',
        opacity:0        
    },

    descriptionTitleModal: {
        fontSize: 18,
        color: '#ffffff',        
    },

    descriptionTextModal: {
        fontSize: 16,
        color: '#ffffff80',
        paddingBottom:15,
        paddingTop:5,
        textAlign: 'justify'
    },

    profissionTextModal: {
        fontSize: 25,
        color: '#ccad00',
        paddingBottom:5,
        paddingTop:5,
        textAlign: 'justify',
    },

    divValuesChat: {
        alignItems: 'stretch',
        flexDirection: 'row',
        flex: 1
    },

    divNameDesc: {
        marginLeft: 12
    },   

    spaceChat: {
        flex: 1,
        paddingRight: 8,
        paddingLeft: 8,   
    },

    cardChat: {
        backgroundColor: '#212121',
        paddingTop: 8,
        paddingEnd: 8,
        paddingStart: 8,
        paddingBottom: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        borderBottomWidth: 0.2,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 4,
        marginBottom: 4,
        paddingLeft: 12
    },

    contentText: {  
        paddingEnd: 8,
        paddingStart: 8,
        paddingLeft: 8,
        paddingBottom: 8,
        justifyContent: 'flex-start',
        marginBottom: 4,
    },

    contentInput:{
        height: 50,
        backgroundColor: '#000',
        paddingEnd: 8,
        paddingStart: 8,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 4,
        width: "97%",
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        color: '#f5f5f590',
        fontSize: 16,
    },

    floatButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "97%",
        height: 50,        
        backgroundColor: '#ccad00',
        borderRadius: 100,
        marginTop: 30
    },
})

export default ModalReportUser;