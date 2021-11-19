import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../../Config/firebaseconfig'

function ModalInfoUser({open, onClose, ImageAvatar, Title, Desc}){    
    
    const { uid } = firebase.auth().currentUser.providerData[0]
    const [validProf, setValidProf] = useState([])    

    useEffect(() => {
        firebase.database()
            .ref(`Users/${uid}`)
            .once('value')
            .then(snapshot => {
                const data = snapshot.val()
                if (data.isProf != "false") setValidProf(true)
            })

    }, [])

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
                    <View style = {styles.perfilViewModal}>
                        <Image source={{uri: ImageAvatar}} style={styles.imageChatModal}></Image>
                        <View style={styles.perfilViewModalTitle}>                            
                            <Text style={styles.chatNameModal}>{Title}</Text>
                        </View>                    
                    </View>
                    <View>    
                        {validProf != false ? isProfession(Desc): teste()}
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
        height: 495, 
        width: 310,
        backgroundColor:'#212121',
        marginBottom: 187,
        borderRadius: 2,    
    },

    perfilViewModal: {
        width: 310, 
        height: 150, 
        marginTop: 32,
        backgroundColor: 'black'   
    },

    perfilViewModalTitle:{
        height: 32, 
        width: 310, 
        marginTop: -32,        
        alignItems:'center',
        backgroundColor:'hsla(0, 0%, 0%, 0.1)',
        position: 'absolute',        
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
        paddingRight: 45,
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
    }
})

const teste = () => {
    return(<View style={{backgroundColor: 'blue', width: '10', height: 10}}></View>)
}

//Variavel que armazena os componentes que serão renderizados caso o usuário seja um profissional
const isProfession = (Desc) => {
    return(
        <View>
            <Animatable.View style={styles.evaluationModal}>
                    <Text style={styles.evaluationTextTitle}>Média:</Text>
                    <Text style={styles.evaluationText}>5,0</Text>
                    <Text style={styles.evaluationText}>- 100 Avaliações</Text>                            
                    <Animatable.View style={styles.infoEvaluationModal}>
                        <SimpleLineIcons name="star" color={'#fff'} size={20} style={{paddingRight: 3 }}/>
                        <SimpleLineIcons name="star" color={'#fff'} size={20} style={{paddingRight: 3 }}/>
                        <SimpleLineIcons name="star" color={'#fff'} size={20} style={{paddingRight: 3 }}/>
                        <SimpleLineIcons name="star" color={'#fff'} size={20} style={{paddingRight: 3 }}/>
                        <SimpleLineIcons name="star" color={'#fff'} size={20} style={{paddingRight: 3 }}/>                                                        
                    </Animatable.View>    
                </Animatable.View>                        
                <View style = {styles.descriptionViewModal}>
                    <ScrollView>    
                        <Text style={styles.profissionTextModal}>{Desc}</Text>                          
                        <Text style={styles.descriptionTitleModal}>Descrição</Text>
                        <Text style={styles.descriptionTextModal}>
                            Trabalho com psicologia a 7 anos e nesse periodo pude auxiliar diversos 
                            pacientes no combate a depressão, ansiedade e muitos outros casos. 
                            Meu objetivo é conseguir ajudá-lo a combater suas dificuldades 
                            e lidar com seus problemas. Será um prazer ajudá-lo.
                        </Text>
                    </ScrollView> 
                </View>
        </View>
    );
}

export default ModalInfoUser;