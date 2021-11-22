import React, {useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import styles from './styleCardGroup'
import * as Animatable from 'react-native-animatable'
import ModalGroupImage from '../ModalComponents/ModalGroupImage'

export default function CardGroup({ Title, Desc, ImageGp }) {
    const navigator = useNavigation()    

    // Constante que armazena a  referência da View do CardChat
    const cardRef = useRef()
    const optionsRef = useRef()
    
    const [cardState, setCardState] = useState(false)
    const [openImage, setOpenImage] = useState(false)

    let deviceWidth = Dimensions.get('window').width

    // Função que redireciona para a tela de Grupos.
    function chatGroup() { navigator.navigate('ChatGroup', { title: Title }) }
    
    //Função que exibe a imagem do grupo
    function pressImage(){
        setOpenImage(!openImage) 
     }

    //Função que exibe informações adicionais
    function showGroupInfo(){
        if (cardState == 0){
            cardRef.current.transitionTo({height: 120, paddingBottom: 50});
            optionsRef.current.transitionTo({opacity: 1})
            setCardState(1)
        }else{
            cardRef.current.transitionTo({height: 70, paddingBottom: 0});
            optionsRef.current.transitionTo({opacity: 0})
            setCardState(0)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => showGroupInfo()}>
                <View style={styles.spaceGroup}>
                    <Animatable.View style={styles.cardGroup} ref={cardRef}>
                        <View style={styles.divValuesGroup}>
                            <TouchableOpacity onPress={ () => {pressImage()}}>
                                <Image source={{ uri: ImageGp }} style={styles.imageGroup} />
                            </TouchableOpacity>
                            <View style={styles.divNameDesc}>
                                <Text 
                                    numberOfLines={1}
                                    style={styles.groupName}
                                >{deviceWidth > 360 ? `${Title}` : `${Title.substring(0, 18)}...`}
                                </Text>
                                <Text style={styles.groupDescription}>{Desc}</Text>
                            </View>
                            
                            <View style={styles.containerButton}>
                                <TouchableOpacity
                                    style={styles.enterButton}
                                    onPress={() => chatGroup()}
                                >
                                    <Text style={styles.text}>Acessar</Text>
                                </TouchableOpacity>
                            </View>                            
                        </View>                        
                        <Animatable.View style={styles.groupOptions} ref={optionsRef}>
                            <TouchableOpacity
                                style={styles.contentOptions}
                            >
                                <View style={styles.containerIcon}>
                                    <SimpleLineIcons
                                        style={styles.iconMod}
                                        name="close"
                                        color={'#ccad00'}
                                        size={22}
                                    />
                                </View>         
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.contentOptions}
                            >
                                <View style={styles.containerIcon}>
                                    <SimpleLineIcons
                                        style={styles.iconMod}
                                        name="pencil"
                                        color={'#ccad00'}
                                        size={22}
                                    />
                                </View>         
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.contentOptions}
                            >
                                <View style={styles.containerIcon}>
                                    <SimpleLineIcons
                                        style={styles.iconMod}
                                        name="flag"
                                        color={'#ccad00'}
                                        size={22}
                                    />
                                </View>         
                            </TouchableOpacity>
                        </Animatable.View>                                                                        
                    </Animatable.View>

                </View>
                <ModalGroupImage
                open={openImage} 
                onClose={() => 
                    setOpenImage(false)} 
                ImageGp={ImageGp} 
                Title={Title}
                />
            </TouchableOpacity>            
        </View>

    );
}