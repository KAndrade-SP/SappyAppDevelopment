import React, { useEffect, useState } from "react"
import { Text, View, Image, ScrollView, ToastAndroid, TouchableOpacity } from "react-native"
import Modal from 'react-native-modal'

import * as Animatable from 'react-native-animatable'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import firebase from '../../../Config/firebaseconfig'
import styles from "./StylesInfoUser"

function ModalInfoUser({ open, onClose, ImageAvatar, Title, Desc, Identify }) {

    const [userData, setUserData] = useState({
        prof: false,
        bioUser: '',
        id: '',
        likeValue: 0,
        deslikeValue: 0,
        likeWho: '',
        deslikeWho: '',
        area: '',
    })
    
    const [buttonLike, setButtonLike] = useState('white')
    const [buttonDislike, setButtonDislike] = useState('white')
    const [touched, setTouched] = useState(false)

    const currentUser = firebase.auth().currentUser.email

    async function validator() {
        await firebase.database()
            .ref(`Users`)
            .once('value')
            .then(snapshot => {
                const data = Object.values(snapshot.val()) // Pegando todos os dados.
                data.map(({ bio, dataProf, actions }, key) => {
                    // Setar cardChat com os valores, caso a validação for verdadeira. 
                    if (data[key].email == Identify && data[key].isProf == "true") {
                        setUserData({
                            bioUser: bio,
                            id: Object.keys(snapshot.val())[key],
                            likeValue: parseInt(dataProf.like),
                            deslikeValue: parseInt(dataProf.deslike),
                            prof: true,
                            likeWho: actions.likedWho,
                            deslikeWho: actions.deslikedWho,
                            area: dataProf.area
                        })

                    }
                }) 
            })
    }

    function setStates(){
        if (userData.likeWho != '' && userData.likeWho != undefined) {
                const likes = userData.likeWho.split(',')
                console.log("Likeddddd")
                likes.map((value,key) => {
                    console.log(value)
                    if(value == currentUser){
                        setButtonLike('green')
                        setTouched(true)
                    }
                })
                
            } else if(userData.deslikeWho != '' && userData.deslikeWho != undefined){
                const deslikes = userData.deslikeWho.split(',')
                console.log("desLikeddddd")
                deslikes.map((value,key) => {
                    console.log(value)
                    if(value == currentUser){
                        setButtonDislike('red')
                        setTouched(true)
                    }
                })
            }
    }
    function evaluation(action) {
        if (action == 0 && buttonLike == 'white') {
            setButtonLike('green')
            let Like = userData.likeValue += 1

            // Adicionando like no banco
            firebase.database().ref(`Users/${userData.id}`).update({
                dataProf: {
                    area: userData.area,
                    deslike: (userData.deslikeValue).toString(),
                    like: (Like).toString()
                },
                actions: {
                    deslikedWho: userData.deslikeWho,
                    likedWho: userData.likeWho + ',' + currentUser
                }
            })
        }
        if (action == 1 && buttonDislike == 'white') {
            setButtonDislike('red')
            let Deslike = userData.deslikeValue += 1

            // Adicionando deslike no banco
            firebase.database().ref(`Users/${userData.id}`).update({
                dataProf: {
                    dataProf: {
                        area: userData.area,
                        like: (userData.likeValue).toString(),
                        deslike: (Deslike).toString()
                    },
                },
                actions: {
                    likedWho: userData.likeWho,
                    deslikedWho: userData.deslikeWho + ',' + currentUser
                }
            })
        }
        ToastAndroid.show("Profissional Avaliado", ToastAndroid.SHORT)
        setTouched(true)
    }

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            validator().then(setStates)
            isMounted = false
        }
    }, [])

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
                style={{ alignItems: 'center' }}
                backdropOpacity={0}
            >
                <View style={styles.viewModal}>
                    <View style={styles.perfilViewModal}>
                        <Image source={{ uri: ImageAvatar }} style={styles.imageChatModal}></Image>
                        <View style={styles.perfilViewModalTitle}>
                            <Text style={styles.chatNameModal}>{Title}</Text>
                        </View>
                    </View>
                    <View>
                        {userData.prof == true ?
                            <View>
                                <Animatable.View style={styles.evaluationModal}>
                                    <Animatable.View style={styles.infoEvaluationModal}>
                                        <TouchableOpacity disabled={touched} onPress={() => evaluation(0)} style={styles.iconLike}>
                                            <SimpleLineIcons name="like" color={buttonLike} size={22} />
                                        </TouchableOpacity>
                                        <TouchableOpacity disabled={touched} onPress={() => evaluation(1)}>
                                            <SimpleLineIcons name="dislike" color={buttonDislike} size={22} />
                                        </TouchableOpacity>

                                    </Animatable.View>
                                </Animatable.View>
                            </View>
                            :
                            <></>
                        }
                        <View style={styles.descriptionViewModal}>
                            <ScrollView>
                                {userData.prof == true ? <Text style={styles.profissionTextModal}>{Desc}</Text> : <></>}
                                <Text style={styles.descriptionTitleModal}>Biografia</Text>
                                <Text style={styles.descriptionTextModal}>{userData.bioUser}</Text>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalInfoUser;