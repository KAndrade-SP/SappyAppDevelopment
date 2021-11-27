import React, { useEffect, useState, useRef } from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Modal from 'react-native-modal'
import * as Animatable from 'react-native-animatable';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ModalinfoUser from './ModalUserOptions/ModalInfoUser';
import ModalReportUser from './ModalUserOptions/ModalReportUser'

function ModalUserImage({ open, onClose, ImageAvatar, Title, Desc, Identify }){
    
    const [image, setImage] = useState([])
        
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
    const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity)

    useEffect(() => {
        return () => { setImage([]) }
    }, [])

    function showModalInfo(){   
        setOpenModalInfo(!openModalInfo)
    }

    function showModalReport(){   
        setOpenModalReport(!openModalReport)
    }
    

    return (    
        <View>
            {/*This model will be called when the user clicks on an image */}
            <Modal isVisible={open}
                onBackButtonPress={onClose}
                onBackdropPress={onClose}
                animationIn={"bounceInUp"}
                animationOut={"bounceOutDown"}
                animationOutTiming={800}
                animationInTiming={800}
                style={{alignItems:'center'}}
                backdropOpacity={0}              
            >                 
                <Animatable.View style={styles.viewModal} ref={viewRef}>                
                    <Animatable.View style={styles.perfilViewModal} ref={perfilViewRef} > 
                        <Image source={{uri: ImageAvatar}} style={styles.imageChatModal} ref={imageRef} />
                        <Animatable.View style={styles.perfilViewModalTitle} ref={titleRef} >
                            <Text style={styles.chatNameModal}>{Title}</Text>
                        </Animatable.View>    

                        <Animatable.View style={styles.containerIcons}>                 
                            <AnimatableTouchableOpacity style={styles.iconModalInfo} onPress={() => {showModalInfo(); onClose()}} ref={iconInfoRef} >                                
                                <SimpleLineIcons name="info" color={'#f5f5f5'} size={30} />
                            </AnimatableTouchableOpacity>
                            <AnimatableTouchableOpacity style={styles.iconModalReport} onPress={() => {showModalReport(); onClose()}} ref={iconBanRef} >                                
                                <SimpleLineIcons name="ban" color={'#f5f5f5'} size={30} />
                            </AnimatableTouchableOpacity>
                        </Animatable.View> 

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
                Identify={Identify}
            />
            <ModalReportUser
                open={openModalReport} 
                onClose={() => 
                setOpenModalReport(false)}
                Title={Title}
                Desc={Desc}
                Identify={Identify}                 
            />
        </View>
    )
}

const styles = StyleSheet.create({

    viewModal: {
        height: 300,
        width: 250,
        backgroundColor:'#171717',
        marginBottom: 150,
        borderRadius: 10,    
    },

    perfilViewModal: {
        width: 250,
        height: 300,
        backgroundColor: '#000710'   
    },

    imageChatModal: {
        width: 250,
        height: 250,             
    },

    perfilViewModalTitle:{
        width: 250,
        height: 30,
        alignItems:'baseline',
        backgroundColor:'#00071090',
        position: 'absolute',        
    },

    chatNameModal: {
        fontSize: 20,
        color: '#f5f5f5',
        paddingLeft: 8                
    },

    containerIcons: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'space-around',
        backgroundColor:'#171717',
    },

    iconModalInfo: {
        alignSelf: 'center',
        justifyContent: 'center',
    },

    iconModalReport: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
})

export default ModalUserImage;