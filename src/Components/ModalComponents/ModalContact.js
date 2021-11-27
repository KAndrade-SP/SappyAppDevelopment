import React from "react"
import { Text, View, StyleSheet } from "react-native"
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Modal from 'react-native-modal'

function ModalContact({ open, onClose }) {

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
                style={{ alignItems: 'center', flex: 1 }}
            >
                <View style={styles.viewModal}> 
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>   
                    <View
                        style={styles.contentOptions}
                    >
                        <View style={styles.containerIcon}>
                            <SimpleLineIcons
                                style={styles.iconMod}
                                name="envelope"
                                color={'#ccad00'}
                                size={22}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text
                                style={styles.textOptions}
                            >Email
                            </Text>
                            <Text
                                style={styles.descOptions}
                            >
                                safetytcc2dsn@gmail.com
                            </Text>
                        </View>           
                    </View>

                    <View
                        style={styles.contentOptions}
                    >
                        <View style={styles.containerIcon}>
                            <SimpleLineIcons
                                style={styles.iconMod}
                                name="phone"
                                color={'#ccad00'}
                                size={22}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text
                                style={styles.textOptions}
                            >Telefone
                            </Text>
                            <Text
                                style={styles.descOptions}
                            >
                                9999-xxxx
                            </Text>
                        </View>           
                    </View>

                    <View
                        style={styles.lastContentOptions}
                    >
                        <View style={styles.containerIcon}>
                            <SimpleLineIcons
                                style={styles.iconMod}
                                name="bulb"
                                color={'#ccad00'}
                                size={22}
                            />
                        </View>
                        <View style={styles.containerText}>
                            <Text
                                style={styles.textOptions}
                            >Versão
                            </Text>
                            <Text
                                style={styles.descOptions}
                            >
                                1.0
                            </Text>
                        </View>           
                    </View>
                </View>       
                </View>          
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

    viewModal: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 4,
        marginBottom: 4,
        paddingHorizontal: 8,
        height: 200, 
        width: 300,
        backgroundColor:'#171717',
        borderRadius: 10,   
    },

    contentOptions: {
        flexDirection: "row",
        paddingTop: 6,
        paddingBottom: 8,
        justifyContent: 'center',
        paddingLeft: 12,
    },

    lastContentOptions: {
        flexDirection: "row",
        paddingTop: 6,
        paddingBottom: 8,
        marginBottom: 8,
        justifyContent: 'center',
        paddingLeft: 12,
    },

    containerIcon: {
        justifyContent: 'center'
    },

    iconMod: {
        marginTop: 6,
    },

    containerText: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 4
    },

    textOptions: {
        marginLeft: 12,
        marginTop: 6,
        color: "#f5f5f5",
        fontSize: 16,
    },

    descOptions: {
        marginLeft: 12,
        marginTop: 6,
        color: "#f5f5f590",
        fontSize: 12,
    }

})

export default ModalContact;