import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable';

function ModalGroupImage({open, onClose, ImageGp, Title}){

    return (    
        <View>
            {/*This model will be called when the user clicks on an image */}
            <Modal isVisible = {open} animationIn='fadeIn' 
                animationOut='fadeOut' 
                onBackdropPress={onClose}  
                onBackButtonPress={onClose}
                style={{alignItems:'center'}}
                backdropOpacity={0}              
            >                 
                <Animatable.View  style = {styles.viewModal}>                
                    <Animatable.View style = {styles.perfilViewModal}> 
                        <Image source={{uri: ImageGp}} style={styles.imageChatModal}/>
                        <Animatable.View style={styles.perfilViewModalTitle}>
                            <Text style={styles.chatNameModal}>{Title}</Text>
                        </Animatable.View>                                                
                    </Animatable.View>                                 
                </Animatable.View >
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
        width: 250,
        height: 250,        
        borderWidth: 0.2,
        backgroundColor: '#1c1c1c',        
    },

    viewModal: {
        height: 250,
        width: 250,
        backgroundColor:'#212121',
        marginBottom: 235,
        borderRadius: 2,    
    },

    perfilViewModal: {
        width: 250,
        height: 250,
        backgroundColor: 'black'   
    },

    perfilViewModalTitle:{
        width:250,
        height: 32,
        alignItems:'baseline',
        backgroundColor:'hsla(0, 0%, 0%, 0.3)',
        position: 'absolute',        
    },

    descriptionViewModal: {
        width: 310,
        height: 220,
        alignItems: 'center',
        position: 'absolute',
        opacity: 0,
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

    iconModalInfo: {
        width: 125,
        height: 50,
        borderColor: 'black',
        paddingTop: 6,
        backgroundColor: '#1f1f1f',
        position: 'absolute',
        marginTop:250,
        alignItems: 'center',
    },

    iconModalReport: {
        width: 125,
        height: 50,
        borderColor: 'black',
        paddingTop: 6,
        backgroundColor: '#1f1f1f',
        position: 'absolute',
        marginTop:250,
        marginLeft: 125,
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
    }
})

export default ModalGroupImage;