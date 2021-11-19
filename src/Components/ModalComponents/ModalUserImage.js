import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ModalinfoUser from './ModalUserOptions/ModalInfoUser';
import ModalReportUser from './ModalUserOptions/ModalReportUser'


function ModalUserImage({ open, onClose, ImageAvatar, Title, Desc }){
    
    const [image, setImage] = useState([])

    const [touchInfo, setTouchInfo] = useState(false)
    const [animation, setAnimation] = useState("")
    const [openModalInfo, setOpenModalInfo] = useState(false)
    const [openModalReport, setOpenModalReport] = useState(false)

    //Constantes que armazenam as referência de componentes animados
    const viewRef = useRef();
    const imageRef = useRef();
    const titleRef = useRef();
    const iconInfoRef = useRef();
    const iconBanRef = useRef();
    const perfilViewRef = useRef();
    const descriptionViewRef = useRef();

    //Criando o um touchableOpacityAnimado
    const  AnimatableTouchableOpacity  =  Animatable . createAnimatableComponent ( TouchableOpacity ) ;

    useEffect(() => {
        return () => { setImage([]) }
    }, [])

    function showModalInfo(touchInfo){   
        setOpenModalInfo(!openModalInfo)
    }

    function showModalReport(touchInfo){   
        setOpenModalReport(!openModalReport)
    }
    

    return (    
        <View>
            {/*This model will be called when the user clicks on an image */}
            <Modal isVisible = {open} animationIn='fadeIn' 
                animationOut='fadeOut' 
                onBackdropPress={onClose}  
                style={{alignItems:'center'}}
                backdropOpacity={0}              
            >                 
                <Animatable.View  style = {styles.viewModal} animation={animation} ref={viewRef}>                
                    <Animatable.View style = {styles.perfilViewModal} ref={perfilViewRef} > 
                        <Image source={{uri: ImageAvatar}} style={styles.imageChatModal} ref={imageRef} />
                        <Animatable.View style={styles.perfilViewModalTitle} ref={titleRef} >
                            <Text style={styles.chatNameModal}>{Title}</Text>
                        </Animatable.View>                        
                        <AnimatableTouchableOpacity style={styles.iconModalInfo} onPress={() => showModalInfo(touchInfo)} ref={iconInfoRef} >                                
                            <SimpleLineIcons name="info" color={'#fff'} size={30} />
                        </AnimatableTouchableOpacity>
                        <AnimatableTouchableOpacity style={styles.iconModalReport} onPress={() => showModalReport(touchInfo)} ref={iconBanRef} >                                
                            <SimpleLineIcons name="ban" color={'#fff'} size={30} />
                        </AnimatableTouchableOpacity>
                    </Animatable.View>                                 
                </Animatable.View >
            </Modal>
            <ModalinfoUser
                open={openModalInfo} 
                onClose={() => 
                setOpenModalInfo(false)} 
                ImageAvatar={ImageAvatar} 
                Title={Title}
                Desc={Desc}
            />
            <ModalReportUser
                open={openModalReport} 
                onClose={() => 
                setOpenModalReport(false)}
                Title={Title}
                Desc={Desc}                 
            />

        </View>)
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
        height: 300,
        width: 250,
        backgroundColor:'#212121',
        marginBottom: 187,
        borderRadius: 2,    
    },

    perfilViewModal: {
        width: 250,
        height: 300,
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

export default ModalUserImage;